// pages/api/repos.ts

import axios from 'axios';
import {  NextResponse } from 'next/server';

type Repo = {
  id: number;
  name: string;
  private: boolean;
  language: string;
  description: string;
  created_at: string;

};

export  async function GET() {
  try {
    const { GITHUB_API_KEY } = process.env;

    if (!GITHUB_API_KEY) {
      return  NextResponse.json({ error: 'GitHub token is not configured in environment variables.' }, { status: 500 });
       
    }

    // Request to get private repositories using GitHub API
    const response = await axios.get<Repo[]>('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`,
        Accept: 'application/vnd.github.v3+json',
      },
      params: {
        type: 'private',
        sort: 'created',
      },
    });

    const privateRepos = response.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      private:  repo.private,
      language: repo.language,
      description: repo.description,
      created_at: repo.created_at,

     
    }));

 
    return NextResponse.json(privateRepos, {status: 200});
    
  } catch (error) {
    
    return NextResponse.json(error , {status: 500});
  }
}
