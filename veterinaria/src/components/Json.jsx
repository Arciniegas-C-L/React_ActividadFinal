import Medicamento  from '../assets/images/medicamento.png'
import Producto from '../assets/images/productos.png'
import Cita from '../assets/images/cita.png'


export const servicios = [
    {
        nombre: "Medicamentos",
        img: Medicamento,
        alt: "Medicamentos",
        descripcion: "Servicio de medicamentos para la salud de nuestros clientes domesticos"
    },
    {
        nombre: "Productos",
        img: Producto,
        alt: "Productos",
        descripcion: "Servicio de productos variados para la satisfaccion de nuestros clientes domesticos"
    },
    {
        nombre: "Citas",
        img: Cita,
        alt: "Citas",
        descripcion: "Servicio de citas para programar la atencion medica a nuestros clientes domesticos"
    }
]

export const animales = [
    {
        id: 1,
        nombre: "Perros",
        img: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3QwdjltMm1idHl0dWN0OTd0bnM4dDJ2azA1OXdzcTlqeXJ2cDB4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Yomr19B3bTgPUl0N3H/giphy.webp",
        alt: "Perro",
        descripcion: "Ofrecemos vacunación, desparasitación, consultas médicas y peluquería canina especializada."
    },
    {
        id: 2,
        nombre: "Gatos",
        img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRxbGxoM2puczdob2V4czA1ODNyZGhwdTA3ZHJ6d3NtYnc4Z2F6YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OKalQ6YS6trCOxzoeM/giphy.webp",
        alt: "Gato",
        descripcion: "Servicios de medicina preventiva, esterilización, diagnóstico y tratamiento de enfermedades felinas."
    },
    {
        id: 3,
        nombre: "Conejos",
        img: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGU4eTNubGZ0dnlnZXMyMjl3ZTd1ZDB0eG41dXlhNTZhNDhmMjFwMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/bp31UnSkUeg72AF89t/giphy.webp",
        alt: "Conejo",
        descripcion: "Chequeos de salud, corte de uñas, limpieza dental y alimentación especializada para conejos."
    },
    {
        id: 4,
        nombre: "Pajaros",
        img:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHQ0MjQ5OW4yaHRqbjh4MWpzMGFldDZvOTVvZHQ5bjY0ZnhsajlmZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jFw9SgRjYyP1PnMW32/giphy.webp",
        alt: "Pajaros",
        descripcion: "Control veterinario, revisión del plumaje, tratamientos antiparasitarios y asesoría nutricional."
    },
    {
        id: 5,
        nombre: "Hamsters",
        img: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2c3Y2ljc3pkbmgwcTZrbG8xb2NieWxkYmtvODJjODE2YWlyZXlybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/V84ahYtxoMradQD6le/giphy.webp",
        alt: "Hamsters",
        descripcion: "Evaluación de salud, control de peso, cuidado dental y recomendaciones de hábitat."
    }
]

const medicamentos = [
    {
        id: 1,
        nombre: "Antiparasitario Canino",
        tipo: "Pastilla",
        descripcion: "Medicamento para eliminar parásitos internos y externos en perros",
        dosis: "1 pastilla cada 3 meses",
        animal: "Perro",
        precio: 25000
    },
    {
        id: 2,
        nombre: "Antiparasitario Felino",
        tipo: "Pastilla",
        descripcion: "Medicamento para eliminar parásitos internos y externos en gatos",
        dosis: "1 pastilla cada 3 meses",
        animal: "Gato",
        precio: 28000
    },
    {
        id: 3,
        nombre: "Vitaminas para Aves",
        tipo: "Líquido",
        descripcion: "Suplemento vitamínico para aves domésticas",
        dosis: "5 gotas en el agua diariamente",
        animal: "Ave",
        precio: 15000
    },
    {
        id: 4,
        nombre: "Antiinflamatorio Canino",
        tipo: "Inyección",
        descripcion: "Medicamento para tratar inflamaciones en perros",
        dosis: "1 inyección cada 24 horas",
        animal: "Perro",
        precio: 35000
    },
    {
        id: 5,
        nombre: "Antibiótico Felino",
        tipo: "Cápsula",
        descripcion: "Tratamiento antibiótico para infecciones en gatos",
        dosis: "1 cápsula cada 12 horas",
        animal: "Gato",
        precio: 32000
    },
    {
        id: 6,
        nombre: "Suplemento para Conejos",
        tipo: "Polvo",
        descripcion: "Suplemento nutricional para conejos con vitaminas y minerales",
        dosis: "1 cucharada en el agua diariamente",
        animal: "Conejo",
        precio: 18000
    },
    {
        id: 7,
        nombre: "Antiparasitario para Hamsters",
        tipo: "Gotas",
        descripcion: "Tratamiento antiparasitario específico para hamsters",
        dosis: "2 gotas cada 2 semanas",
        animal: "Hamster",
        precio: 12000
    },
    {
        id: 8,
        nombre: "Antiinflamatorio Felino",
        tipo: "Jarabe",
        descripcion: "Medicamento antiinflamatorio para gatos en formato líquido",
        dosis: "2ml cada 8 horas",
        animal: "Gato",
        precio: 28000
    },
    {
        id: 9,
        nombre: "Vitaminas para Conejos",
        tipo: "Pastilla",
        descripcion: "Complejo vitamínico para fortalecer el sistema inmune de conejos",
        dosis: "1 pastilla diaria",
        animal: "Conejo",
        precio: 22000
    },
    {
        id: 10,
        nombre: "Antibiótico para Aves",
        tipo: "Polvo",
        descripcion: "Antibiótico de amplio espectro para aves domésticas",
        dosis: "1 cucharadita en el agua por 5 días",
        animal: "Ave",
        precio: 25000
    },
    {
        id: 11,
        nombre: "Suplemento para Hamsters",
        tipo: "Gotas",
        descripcion: "Suplemento energético para hamsters activos",
        dosis: "3 gotas en el agua diariamente",
        animal: "Hamster",
        precio: 15000
    },
    {
        id: 12,
        nombre: "Antiparasitario para Conejos",
        tipo: "Pomada",
        descripcion: "Tratamiento tópico para parásitos externos en conejos",
        dosis: "Aplicar una vez al mes",
        animal: "Conejo",
        precio: 20000
    }
];

export default medicamentos;