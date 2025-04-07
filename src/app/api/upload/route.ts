import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
// cloudinary.config({
//     cloud_name: 'dtavjvcu6',
//     api_key: '673868561246461',
//     api_secret: "c9Xe2whibdaWprkldx4f9W8ethU"
// })
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request: Request) {
    // Extraemos los datos del formulario enviado en la solicitud
    const data = await request.formData()
    const image = data.get('image')
    // Verificamos si se ha enviado una imagen
    if (!image) {
        return NextResponse.json("No se ha subido la iamgen", { status: 400 });
    }
    // Validamos que el archivo recibido sea un objeto Blob (que representa un archivo binario)
    if (!(image instanceof Blob)) {
        return NextResponse.json({ error: "El valor proporcionado no es una imagen válida" }, { status: 400 });
    }
    // Convertimos el Blob a un ArrayBuffer para poder manejar los datos binarios
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);// Convertimos el ArrayBuffer a un Buffer de Node.js


    try {
        // Subimos la imagen a Cloudinary utilizando un stream
        const response: UploadApiResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, (err, result) => {
                if (err) {
                    return reject(err); // Si hay error, se rechaza la promesa
                }
                resolve(result as UploadApiResponse); // Se resuelve con el resultado de Cloudinary
            }).end(buffer); // Enviamos los datos binarios al stream
        });

        // Retornamos la respuesta de Cloudinary
        return NextResponse.json({ message: "Imagen subida", data: response.secure_url });
    } catch (error) {
        // Manejamos cualquier error en la subida
        console.log(error);
        return NextResponse.json({ error: "Error al subir la imagen" }, { status: 500 });
    }

} 