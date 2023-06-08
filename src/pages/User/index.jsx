/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchUser } from "../../services/index";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";

import { getRepos } from "../../services";
import TypographyIconBio from "../../components/typographyIconBio";

export default function User() {
  const location = useLocation();
  const [userDetail, setUserDetail] = useState({});
  const [repos, setRepos] = useState([]);

  const fetchUser = async (username) => {
    const data = await searchUser(username);
    setUserDetail(data);
    console.log(data);
  };

  const fetchRepos = async (username) => {
    const data = await getRepos(username);
    setRepos(data);
    console.log("repos", data);
  };

  useEffect(() => {
    const paths = location.pathname.split("/");
    const username = paths[2];
    fetchUser(username);
    fetchRepos(username);
  }, [location]);

  return (
    <Container maxWidth="md">
      {userDetail && (
        <Box mt={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box mb={1}>
                <img
                  style={{ borderRadius: "50%" }}
                  width={200}
                  src={userDetail.avatar_url}
                  alt={userDetail.login}
                />
              </Box>
              <Typography mb={1} variant="h6">
                {userDetail.name}
              </Typography>
              <Typography mb={3} variant="h6" color="#000000">
                {userDetail.login}
              </Typography>
              <Typography mb={2} variant="body1">
                {userDetail.bio}
              </Typography>
              <Typography mb={2} variant="body1">
                {userDetail.company}
              </Typography>
              <Button variant="contained" fullWidth>
                Edit Profile
              </Button>
              <TypographyIconBio
                icon="people"
                text={`${userDetail.followers} followers.${userDetail.following}`}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" color="primary">
                Repositorios
              </Typography>
              <br />
              <Box>
                {repos.length > 0 &&
                  repos.map((repo, index) => (
                    <Box key={index} style={{ marginBottom: "20px" }}>
                      <Card>
                        <CardContent>
                          <Link
                            href={repo.homepage ? repo.homepage : "#"}
                            variant="h6"
                            fontWeight="500"
                            target="_blank"
                            color="secondary"
                            style={{ textDecoration: 'none' }}
                          >
                            {" "}
                            {repo.name}
                          </Link>
                          <Typography>
                            Lenguaje: {repo.language ? repo.language : "--"}
                          </Typography>
                          <Typography>
                            Fecha: {repo.created_at.slice(0, 10)}
                          </Typography>
                          <Typography>
                            Descripcion: {repo.description?repo.description:'--'}
                          </Typography>
                          <Link href={repo.html_url}  target="_blank">Ir a Repositorio</Link>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}
