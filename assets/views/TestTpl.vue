<template>
<div>
    
    <section>
        <h1>Vue.js et Symfony</h1>
                <p>Vue.js est un framework JavaScript open-source utilisé pour la création d'interfaces utilisateur. Il a été conçu pour être simple à utiliser et offre une expérience de développement agréable grâce à ses composants réutilisables et sa syntaxe claire. Vue.js s'intègre facilement à de nombreux projets grâce à sa flexibilité et à sa taille réduite.</p>
            <br>
                <p>Symfony est un framework PHP open-source utilisé pour le développement d'applications web. Il est connu pour sa flexibilité et sa puissance, ainsi que pour sa communauté active et son écosystème étendu. En utilisant Symfony, les développeurs peuvent créer rapidement des applications robustes et scalables grâce à ses nombreux composants et outils de développement.</p>
            <br>
        <h2>Intégration de Vue.js et Symfony</h2>

                <p>L'intégration de Vue.js et de Symfony peut être très bénéfique pour les projets qui nécessitent une interface utilisateur interactive et une back-end solide. En utilisant Vue.js pour la partie front-end et Symfony pour la partie back-end, les développeurs peuvent créer des applications web complètes et performantes.</p>
    </section>

    <section>
        <pre>
        <code class="language-css">
            ::placeholder {
                color: var(--placeholder);
                opacity: 1;
            }
        </code>
        </pre>
    </section>

</div>


</template> 

<script>

import Prism from 'prismjs';
import "prismjs/themes/prism-dark.css"; // you can change


export default {

    components: {
        //
    },

  data() {
    return {
      //
    }
  },

  mounted() {
    // add prismjs to code blocks
    Prism.highlightAll();
    // window.Prism = window.Prism || {};
    // window.Prism.manual = true;
  }
}

</script>

<style lang="scss" scoped>

pre {
    display: flex;
    background-color: #1e1e1e;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
    border: none;
}

</style>