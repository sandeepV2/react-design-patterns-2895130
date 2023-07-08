Concepts that have i have learnt form the course are implemeted in respective branches.

Each branch is organised as <branch><beginning> and <branch><ending> 
Example :  01_02b > 01_02e (Explains split screen)

Layout components.

* split screen > 01_02b
* lists        > 01_04b
* Modal        > 01_06b 

Container components.

Here author is covering concepts about, loading the API data into component. 
Say we have 1 API and serving multiple siblings. 
> Note the API server is defined in package.json with proxy.

* CurrentUserLoader > 02_03e (The data loaded from the API is passed as props to children).
> Previous solution is restricted to serving data of single user. The solution here is made generic to serve any user info by taking id. 
* UserInfoLoader > 02_04e
> Why not make UserLoader to generic any ResourceLoader (either people or product)
* ResourceLoader > 02_05e
> Goging 1 step ahead to make the data source generic (here we pass the async function as prop to get required data source -api/localstorage)
* DataSourceLoader > 02_06e
