import React,{useState, useEffect} from 'react';
import axios from 'axios'  
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

    const url = "https://api.agcaddy.com"
    const path = "/auth/login"
    const pathLocation = "/llkexport?search="
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2Z1bGxuYW1lIjoiZGV2Iiwicm9sZV9pZCI6MSwiY3JlYXRlIjoiMjAyMy0wNi0wNyAxMjowNzo0NCIsImV4cGlyZSI6IjIwMjMtMDktMTUgMTI6MDc6NDQiLCJpYXQiOjE2ODYxMTQ0NjR9.e-8PQ6FPsJRcmxiyIy0KHm5FeEBHphuOR-3rnr6-2Cw"

    let formData = {
        username: "1915||ATAC1915",
        password: "123456",
        agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Platform: Win32",
    } ;

    let options = {
        headers: { Authorization: "Bearer " + token },
    };
    

function Agcaddy() {
    const [accessToken, setAccessTokens] = useState("");
    const [locations, setLocations] = useState([{}]);
    
    useEffect(() => {
        axios.post(url + path,formData,options)
            .then((response) =>{
                console.log(response)

                setAccessTokens(response.data.data.access_token)
            })

        let options2 = {
            headers: { Authorization: "Bearer " + accessToken },
            
        };

        axios.get(url + pathLocation,options2)
            .then((response) =>{
                setLocations(response.data.data.export_data)
                console.log(response)
            })
        
    }, [accessToken])


  return (
    <div>
         <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Avatar</TableCell>
                            <TableCell align="left">First Name</TableCell>
                            <TableCell align="left">Last Name</TableCell>
                            <TableCell align="left">Username</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {locations?.map((row,index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="left">{row.llk_shelf_code}</TableCell>
                            <TableCell align="left">{row.dk_code}</TableCell>
                            <TableCell align="left">{row.pr_id_number}</TableCell>
                            <TableCell align="left"></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default Agcaddy
