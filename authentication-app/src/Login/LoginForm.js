import React, { Component, createRef } from 'react'
import styles from "./login-form.module.css";

class LoginForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            username:""
        }
        this.verify = this.verify.bind(this);
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onClickSubmitBtn=this.onClickSubmitBtn.bind(this);
        this.passwordInputRef = createRef();
        console.log("Appel au contructeur")
    }

    someMethod(){
        console.log("Appel à someMethod");
    }

    componentDidMount(){

        console.log("Appel a componentDidMount le composant s'est bien rendu à l'écran")
    }
    onChangeHandler(value){
        this.setState({
            username:value
        })
    }

    verify = (user) => {
        const jwt = user.map(user =>{
            if(user.username===this.state.username){
                if(user.password!==this.passwordInputRef.current.value){
                    return "Mauvais mot de passe ";
                }
                else{
                     return user.jwt;

                    }
                }
                
        })
        console.log(jwt[0]) ;  
    }
        
    onClickSubmitBtn(event){

        console.log("onClickSubmitBtnInput",this.state);
        console.log(this.passwordInputRef);
        event.preventDefault(); // evite le comportement par défaut du bouton => de rafraichir la page
        console.log("password",this.passwordInputRef.current.value);
        fetch("http://localhost:4000/users",{
            method: "get"
        }).then(resultat=>resultat.json())
        .then(response=>(this.verify(response)));

    }

     



    shouldComponentUpdate() {
        // Renvoie "true" par défaut
        // il faut se demander si le component a besoin d'etre mis a jour ex: si les props du parent n'ont pas changé
        console.log("Appel a shouldComponentUpdate");
        return true;
    }
    componentDidUpdate() {
        //console.log("password",this.passwordInputRef.current.value);
        // Après le re-render
        console.log("Appel a componentDidUpdate - le composant est rendu à l'écran")
    }
    componentWillUnmount() {
    // Code unsubscribe
    console.log("Appel a componentWillUnmount")
    }

    render(){
        console.log("Appel au render")
        return(
            <>
            <form  className={styles.loginClass}>
                <h1>Login</h1>
                <div className={styles.txtb}>
                    <input type="text"  value={this.state.username} onChange={e=>this.onChangeHandler(e.target.value)}/>
                    <label htmlFor="UserName">UserName</label>
                </div>
                <div className={styles.txtb}>
                        <input type="password"ref={this.passwordInputRef}/>
                        <label htmlFor="PassWord">PassWord</label>
                </div>
                <button  onClick={this.onClickSubmitBtn} className={styles.btnSubmit}>Login</button>
                
                <div className={styles.bottomText}>
                    Vous n'avez pas de compte? <a href="#">Créer un compte</a>
                </div>
            </form>

            </>
            
        )
    }
}
// export nommé
//export {LoginForm} ;

//export par défaut
export default LoginForm;