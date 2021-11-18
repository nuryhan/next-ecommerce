import { Grid, Card, CardActionArea,CardMedia, CardContent, Typography, CardActions,  } from '@material-ui/core'
import Layout from '../components/Layout'
import data from '../utils/data';
import Image from 'next/image'
import usesStyles from '../utils/styles'



export default function Home() {
  const classes = usesStyles();
  return (
    <Layout>
      <div>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {data.products.map((product)=>  (
          <Grid item md={4} key={product.name}>
            <Card  className={classes.image}>
              <CardActionArea>
                <CardMedia  title={product.name}> <Image src={product.image} alt="image" width="140" height="140" />  </CardMedia>
                <CardContent>
                  <Typography>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography> {product.price} </Typography>
              </CardActions>
            </Card>  
          </Grid>
        ) )}
      </Grid>
       </div>
    </Layout>  
  )
}
