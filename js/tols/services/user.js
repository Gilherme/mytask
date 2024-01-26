async function registerUser(user){
  const options = {
    method: "POST", 
    Headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  }
  const response = await fetch('http://localhost:3000/registerUser', options)
  const data = await response.json()
  return data
}

async function login(user){
  const options = {
    method: "POST", 
    Headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  }
  const response = await fetch('http://localhost:3000/login')
  const data = response.json()
  return data.ok
}
