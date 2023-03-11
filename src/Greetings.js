export function Greeting1() {
    const name = true
    return <h1>{(name) ? 'Emiliano' : 'NoesEmiliano'}</h1>
}

export function Greeting2() {
    const user={
        name: 'Emiliano',
        lastname: 'Morales'
    }

    return <div>
        <h1>{user.name}</h1>
        <h3>{user.lastname}</h3>
        </div>
}