"use client"
import { getEmployee, getUserGuides, postUserPage } from '@/api-service/UserPage-server'
import { IUserPage } from '@/types/userPage.types'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { IGuides2 } from '@/types/guides.types';
// import { getEmployee, getGuides } from '@/api-service/guides-service';
export default function UserPage() {
  const [userGuides, setUserGuides] = useState<IUserPage[]>([])
  const [guides, setGuides] = useState<IGuides2[]>([])
  const fetchData = async () => {
    try {
      const response = await getUserGuides();
      setUserGuides(response?.data?.data)

      const respons = await getEmployee()
      setGuides(respons?.data?.data)
      console.log(respons, "rvrsvrsv")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const changePost = async (id: string) => {
    const respons = await postUserPage(id)
  }
  return (
    <div className='flex flex-wrap gap-[20px] justify-between p-[20px]'>
      {
        userGuides?.map((item, index) => {
          return <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item?.user_id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.guide_id}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => changePost(item._id)}> O'qidim </Button>
            </CardActions>
          </Card>
        })
      }
    </div>
  )
}
