const form = document.querySelector('form')
const userInput = document.getElementsByName('username')[0]

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const { value } = userInput
    getRepos(value)
})

function getRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`
    fetch(url)
        .then(function(res) {
            return res.json()
        })
        .then(addToDom)
        .catch((err) => getError(err))
}

function getUser(username) {
    const url = `https://api.github.com/users/${username}`
    fetch(url)
        .then(function(res) {
            return res.json()
        })
        .then(addUser)
        .catch((err) => getError(err))
}

function addToDom(repos) {
    const reposTitle = "Repositories"
    if (repos) {
      getUser(repos[0].owner.login)
    }
    const reposList = parseList(repos)
    document.querySelector('.repoTitle').innerHTML = reposTitle
    document.querySelector('.repoList').innerHTML = reposList
}

function addUser(user) {
    const username = `@ ${ user.login }`
    const name = user.name
    const bio = user.bio ? user.bio : "No bio available"
    const img = user.avatar_url ? user.avatar_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
    document.querySelector('.usersImg').src = img
    document.querySelector('.username').innerHTML = username
    document.querySelector('.name').innerHTML = name
    document.querySelector('.bio').innerHTML = bio
}

function getError(error) {
    const errMsg = '<p>Does not exist</p>'
    if (error !== undefined) {
        document.querySelector('.error').innerHTML = errMsg
    }
}

function parseList(repositories) {
    return repositories.map((repo) =>
        `<li>${ repo.name }
        <span>&#9733 ${ repo.stargazers_count } &#9282 ${ repo.forks_count } </span>
        </li>` + '\n'
    ).join('')
}
