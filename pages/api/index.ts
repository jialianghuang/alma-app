import type { NextApiRequest, NextApiResponse } from 'next'

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    { 'leads': [
        {
            "name":"jialiang",
            "submitted": "2024-07-01",
            "status": "pending",
            "country": "US"
        },
        {
            "name": "david",
            "submitted": "2024-07-02",
            "status": "pending",
            "country": "CA"
        }
    ]
  })
}