import { useGetUsersQuery } from "./services/api";

const App = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.data?.message}</p>;
  }

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App;