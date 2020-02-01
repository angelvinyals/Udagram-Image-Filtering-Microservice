import fs from 'fs';
import Jimp from 'jimp';

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
/*
export async function filterImageFromURL(inputURL: string): Promise<string>{
    return new Promise( async function resolve() {
        const photo = await Jimp.read(inputURL)
                                .catch(err => {
                                    console.error('jimps error');
                                })
        const outpath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
        await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(__dirname+outpath, (img)=>{
            resolve(__dirname+outpath);
        });
    });
}
*/
///*
export const filterImageFromURL= async (inputURL: string): Promise<string> =>{
     
    const photo = await Jimp.read(inputURL).catch(error => console.log(`Can't fetch image from url. Error, ${error}`))
    if (!photo) return 
    try {  
        const outpath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
        await photo.resize(256, 256)//.catch(error => console.log(`Error 2 ${error}`)) // resize
        await photo.quality(60)//.catch(error => console.log(`Error 3 ${error}`)) // set JPEG quality
        await photo.greyscale()//.catch(error => console.log(`Error 4 ${error}`)) // set greyscale
        await photo.writeAsync(__dirname+outpath)//.catch(error => console.log(`Error 5 ${error}`))
        return (__dirname+outpath)
    } catch(e) {
        console.log('after fetching image. It cannnot be modificated '+e);
    }    
}
//*/

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        fs.unlinkSync(file);
    }
}