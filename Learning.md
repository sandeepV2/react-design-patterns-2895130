Concepts that have i have learnt form the course are implemeted in respective branches.

Each branch is organised as <branch><beginning> and <branch><ending> 
Example :  01_02b > 01_02e (Explains split screen)

**Layout components.**

* split screen > 01_02b
* lists        > 01_04b
* Modal        > 01_06b 

**Container components.**

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

**Controlled vs Uncontrolled Components**

Controlled components - The component that has state/data passed from the parent component. 
Uncontrolled components - Component that has its own state (useState). 

>Controlled components are preferred and good to reuse.
>Forms are most commonly used components.

* Uncontolled Form > 03_02b 
* Controlled Form and how it is different from Uncontrolled Form > 03_03b
* Uncontrolled Modal to controlled Modal (show only at the will of parent component) > 03_04b
* Uncontrolled ways to onboarding flows (set of initial inputs while onboarding the user) > 03_05b - 03_05e
* Getting the data in uncotrolled flows > 03_06b
* Controlled onboarding flow > 03_07b

**HOCs (higher order components).**

Component --> <h1>JSX</h1>
HOC --> SubComponent --> <h1>JSX</h1>

It may be called as Component Factory with shared behaviour. Some what similir to Container components.

* printProps (note it HOCs are wrapper around components and can have small case) > 04_02b
* How to use HOCs for loading data > 04_03e
* Modifying the loaded data (reset, update etc) > 04_04e and 04_05e **!important**__
* Generalising the loading from user to Resource loader > 04_06e - 02_06e

  

