function MyComponent({ name, age }) {
    // console.log({ name, age })

    return (        
        <header>
            <h3>Hello React</h3>
            <span>{ `name: ${name},` }</span> { `age: ${age}` }
        </header>
    )
}

export default MyComponent