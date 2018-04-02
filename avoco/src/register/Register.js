import React from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div id="Center">
    <div id="ToLeft">
      <div id="Logo">AVOCO</div>
      <div id="Register">Załóż konto</div>
      <p>
        <div id="LoginDesc">i dołącz do setek ludzi<br></br>o wspólnych zainteresowaniach!</div>
      </p>
    </div>
    <form id="FlexContainer_Login">
      <input className={styleMedia.form} name="Name" placeholder="Imie" />
      <input className={styleMedia.form} name="Surname" placeholder="Nazwisko" />
      <div id="ComboBackground">
       <select id="Combobox">
         <option hidden>Województwo</option>
         <option value="1">Dolnośląskie</option>
         <option value="2">Kujawsko-pomorskie</option>
         <option value="3">Lubelskie</option>
         <option value="4">Lubuskie</option>
         <option value="5">Łódzkie</option>
         <option value="6">Małopolskie</option>
         <option value="7">Mazowieckie</option>
         <option value="8">Opolskie</option>
         <option value="9">Podkarpackie</option>
         <option value="10">Podlaskie</option>
         <option value="11">Pomorskie</option>
         <option value="12">Śląskie</option>
         <option value="13">Świętokrzyskie</option>
         <option value="14">Warmińsko-mazurskie</option>
         <option value="15">Wielkopolskie</option>
         <option value="16">Zachodniopomorskie</option>
       </select>
      </div>
      <input className={styleMedia.form} name="Email" placeholder="E-mail" />
      <input className={styleMedia.form} name="Password" placeholder="Hasło" />
      <input className={styleMedia.form} name="Rep_Password" placeholder="Powtórz hasło" />
      <a id="signUpButton" href="login.html">Załóż</a>
    </form>
    <div id="IsAccount">Mam już konto.
    <a href="login.html"><button type="button" name="Login_Button">Zaloguj</button></a>
    </div>
  </div>
    );
}
export default Register;