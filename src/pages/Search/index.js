import { TextField,Grid,Button } from "@mui/material"
import { Container } from "@mui/system"

import { useState } from "react"


const Search =()=>{



    return(
        <Container maxWidth ="sm" sx={{
            display :"flex",
            alingItems :"center",
            height :"100vh"
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                    label ="Buscar usario de github"
                   
                    fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button>
                        Buscar
                    </Button>

                </Grid>
            </Grid>
        </Container>

    )
}

export default Search;