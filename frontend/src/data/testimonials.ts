export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  role: 'CUSTOMER' | 'ADMIN';
  content: string;
  avatar: string;
  coverImage: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bianca",
    handle: "@biancateodorou",
    role: "CUSTOMER",
    avatar: "/images/bianca.jpeg",
    coverImage: "/images/people-eating.jpg",
    content: "A comida do FoodBt é simplesmente sensacional. Os ingredientes são frescos e o sabor é de outro mundo. Já virei cliente fiel!"
  },
  {
    id: 2,
    name: "Ricardo",
    handle: "@cantinadoricardo",
    role: "ADMIN",
    avatar: "/images/homem-testimonials.jpg",
    coverImage: "/images/kitchen-action.jpg",
    content: "Desde que cadastramos a Cantina no FoodBt, nossas vendas aumentaram 40%. A plataforma para lojistas é super intuitiva e o suporte é nota 10!"
  }
];