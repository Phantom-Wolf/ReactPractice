function App(props) {
    return (
      <div>
        <header>
            <h1>{props.name}</h1>
            <img
                src={'https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg'}
                alt={'Student Sally Picture'}
            />
        </header>
        <main>
            <address>
                <a href={'mailto:sally@sally.com'} target={'_blank'}>{props.email}</a>
                <br />
                <a href={'tel:1-111-222-3344'}>{props.phone}</a>
                <br />
                <a href={props.url} target={'_blank'}>{props.url}</a>
                <br />
                <a href={'https://github.com/sally'} target={'_blank'}>{props.github}</a>
            </address>
            <section>
            
            <h2>Education</h2>
            
            <p>University of Minnesota</p>
            <ul>
            <li>Sept, 2012 - May, 2016</li>
            <li>BA in Mathematics</li>
            </ul>
            <p>Thinkful - Coding Bootcamp</p>
            <ul>
            <li>Sept, 2017 - Feb, 2018</li>
            <li>Engineering Flex Program</li>
            <li>Coding Extraordinaire</li>
            </ul>
        </section>
        <section>
        
            <h2>Employment History</h2>
        
            <p>Mathnasium</p>
            <ul>
            <li>Math Tudor</li>
            <li>Sept, 2016 - Jan, 2018</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eligendi distinctio libero error vitae aliquid aut autem doloribus delectus necessitatibus possimus tempora, ipsam sequi, quae architecto maxime asperiores qui voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est iusto doloribus consectetur fugit quis accusantium hic assumenda, dolorem autem dolor voluptatibus dolore sunt sed labore neque, saepe illum et!</li>
            </ul>
            <p>Transvoyant</p>
            <ul>
            <li>Junior Software Developer</li>
            <li>March, 2018 - Present</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eligendi distinctio libero error vitae aliquid aut autem doloribus delectus necessitatibus possimus tempora, ipsam sequi, quae architecto maxime asperiores qui voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est iusto doloribus consectetur fugit quis accusantium hic assumenda, dolorem autem dolor voluptatibus dolore sunt sed labore neque, saepe illum et!</li>
            </ul>
        </section>
      </main>
      </div>
    );
  }
  
  // Nested elements inside the App
  ReactDOM.render(
    <App 
      name='Sally Student'
      email='sally@sally.com'
      phone='1-111-222-3344'
      url='http://www.sally.com'
      github='github.com/sally'
    
    />,
    document.querySelector('#application-root')
  );