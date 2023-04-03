import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material/";
import NoticiaImg from '../img/noticias.png'

const Noticia = ({noticia}) => {
  const { urlToImage, url, title, description, publishedAt, author } = noticia;


  return (
    <Grid item md={6} lg={4}>
        <Card>
            <CardMedia 
                component='img'
                alt={`Imagen de la noticia ${title}`}
                image={urlToImage ? urlToImage : NoticiaImg }
                height={'250'}
            />

            <CardContent>

                <Typography variant='body1' color='error'>
                    {author}
                </Typography>

                <Typography variant='h5' component='div'>
                    {title}
                </Typography>

            </CardContent>

            <CardActions>
                <Link
                    href={url}
                    target='_blank'
                    variant="button"
                    width={'100%'}
                    textAlign={'center'}
                    sx={{
                        textDecoration: 'none'
                    }}
                >Leer Noticia</Link>
            </CardActions>

        </Card>
    </Grid>
  )
};

export default Noticia;
