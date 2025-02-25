import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  depoimento1: string =
    'A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.';
  depoimento2: string =
    'Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.';
  depoimento3: string =
    'Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.';

  autor1: string = 'Lauro Matos';
  autor2: string = 'Talita Magalhães';
  autor3: string = 'Mariana Faustino';
}
