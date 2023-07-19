import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'
import axios from 'axios'
// Create a client
const queryClient = new QueryClient()

async function getTodos () {
  const res = await axios({
    url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
    method:"get",
    headers:{
        'X-Client-Info': '{"a":"3001","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        
        'X-Host': 'mall.film-ticket.cinema.list'

    }
});
  return res.data;
} 
async function postTodo () {
  const res = await axios.get('https://api.github.com/repos/tannerlinsley/react-query');
  return res.data;
} 

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  // Access the client
  const queryClient = useQueryClient()
  queryClient.invalidateQueries({ queryKey: ['todos'] });
  // Queries==>存储服务器端数据
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['todos'], queryFn: getTodos });


  // Mutations==>主要用于服务器端数据的处理
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <ul>
        {data?.data.cinemas.map((todo) => (
          <li key={todo.cinemaId}>{todo.name}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}