import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchUsers } from "../../services/index";
import { Container ,Card, CardHeader, Avatar, Box, Grid} from "@mui/material";

export default function Users() {
  const location = useLocation();
  const history = useNavigate();

  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState('');

  const fetchUser = async (username) => {
    const data = await searchUsers(username);
    setUserList(data.items);
  };

  useEffect(() => {
    const paths = location.pathname.split("/");
    const username = paths[2];
    setUsername(username);
    fetchUser(username);
  }, [location]);

  const handleClick= (username)=>{
    history(`/user/${username}`)
}

  return (
    <Container maxWidth="md">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} padding={5}>
        <h3 style={{marginLeft:'25px', color:'#d177ea'}}>Search: {username}</h3>
        {userList.length > 0 ?
          userList.map((item) => {
            return (
              <Grid item xs={12} key={item.id}>
                <Card style={{cursor:'pointer'}}>
                  <CardHeader
                    avatar={
                      <Avatar src={item.avatar_url}></Avatar>
                    }
                    title={'User '+ item.login}
                    subheader={'Github: ' + item.html_url}
                    onClick={()=>{handleClick(item.login)}}
                  />
                </Card>
              </Grid>
            );
          }): <><br /><br /><span>Loanding...</span></>}
      </Grid>
    </Box>
    </Container>
  );
}
