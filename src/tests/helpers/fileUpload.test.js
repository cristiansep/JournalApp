import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'cristiansep', 
    api_key: '394173737757678', 
    api_secret: 'vpjbLbNdOxAJzS-sPlCxa8SwsVY' 
});


describe('Pruebas en fileUpload', () => {

    
    test('Debe cargar un archivo y cargar el URL ', async(done) => {

        const resp = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/300px-PNG_transparency_demonstration_1.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        
        expect(typeof url).toBe('string');

        // Borrar imagen por id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png','');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });

    });

    
    test('Debe retornar un error ', async() => {


        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        
        expect(url).toBe(null);
    });

});
