const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const user = await prisma.usuario.upsert({
      where: { id: 1 },
      update: {},
      create: {
        nombre: "Prueba1",
        username: "Prueba1", 
        celular: 323232323,
        correo: "prueba@gmail.com",
        direccion: "Calle prueba", 
        contrasena: "123",
        imagen: "urlimagen"
      },
    });



    console.log('Se creo registro');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();