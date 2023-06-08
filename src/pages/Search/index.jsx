import { TextField,Grid,Button } from "@mui/material"
import { Container } from "@mui/system"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { getPrueba } from "../../services"

const Search =()=>{
    const [word, setWord] = useState('');
    getPrueba();
    const handlerChange = (e) => {
        setWord(e.target.value);
    } 
    return(
        <Container maxWidth ="sm" sx={{
            display :"flex",
            alignItems :"center",
            height :"100vh"
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                    label ="Buscar usario de github"
                    onChange={handlerChange}
                    value={word}
                    fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <Link to={'/users/'+ word} style={{ textDecoration: 'none' }}>
                    <Button variant="contained"  color="primary" fullWidth>
                        Buscar
                    </Button>
                  </Link>

                </Grid>
            </Grid>
        </Container>

    )
}

export default Search;