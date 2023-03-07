import type { NextPage } from 'next'

import { Typography } from '@mui/material';

import { Layout } from '@/components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Open Jira by Ricardo Caterino '>
      <Typography variant='h1' color='primary'>
        Hola Mundo
      </Typography>
    </Layout>

  )
}

export default HomePage;
