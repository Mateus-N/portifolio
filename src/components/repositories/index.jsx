export default (repos) => {

  if ( repos.name == repos.userName) {
    return
  }
  
  return (
    <div>
      <h1>{repos.name}</h1>
      <p>{repos.description}</p>
      <a href={repos.link}>link</a>
    </div>
  )
}
