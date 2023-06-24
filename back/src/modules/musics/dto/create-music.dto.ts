import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMusicDTO {
  @ApiProperty({
    description: 'Nome da música.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Nome do álbum da música.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  album: string;

  @ApiProperty({
    description: 'Nome do artista.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  artist: string;

  @ApiProperty({
    description: 'Tipo de gênero.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({
    description: 'Ano que a música foi lançada.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty({
    description: 'Url da imagem da música.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cover_image: string | null;

  @ApiProperty({
    description: 'Url do mp3 da música.',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  music_url: string | null;
}
