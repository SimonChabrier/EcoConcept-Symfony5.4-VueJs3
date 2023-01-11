<template>

<div>
<!-- Toujours ouvrir le composant avec une div pour éviter les erreurs Vue sur les transitions --->
    <section class="section appLight flexRow">

        <h1>Vue.js et Symfony</h1>
                <p>Vue.js est un framework JavaScript open-source utilisé pour la création d'interfaces utilisateur. Il a été conçu pour être simple à utiliser et offre une expérience de développement agréable grâce à ses composants réutilisables et sa syntaxe claire. Vue.js s'intègre facilement à de nombreux projets grâce à sa flexibilité et à sa taille réduite.</p>
                <p>Symfony est un framework PHP open-source utilisé pour le développement d'applications web. Il est connu pour sa flexibilité et sa puissance, ainsi que pour sa communauté active et son écosystème étendu. En utilisant Symfony, les développeurs peuvent créer rapidement des applications robustes et scalables grâce à ses nombreux composants et outils de développement.</p>
            
        <h4>Quels bénéfices ?</h4>
                <p>L'intégration de Vue.js et de Symfony peut être très bénéfique pour les projets qui nécessitent une interface utilisateur interactive et une back-end solide. En utilisant Vue.js pour la partie front-end et Symfony pour la partie back-end, les développeurs peuvent créer des applications web complètes et performantes.</p>
    </section>

    <section class="section appLight flexRow">
        <pre>
            <code class="language-css">
                //css

                ::placeholder {
                    color: var(--placeholder);
                    opacity: 1;
                }
            </code>
        </pre>

        <pre>
            <code class="language-javascript">
                // js

                function hello(){
                    console.log(Hello World)
                } 
            </code>
        </pre>

       

    </section>

    <section class="section appLight flexRow">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque voluptate sit quo facilis, officiis reprehenderit quia modi qui cupiditate, commodi similique suscipit autem at cum, ab beatae repudiandae fuga?</p>
        <pre>
            <code class="language-php">
                // php

                echo 'Hello World';
            </code>
        </pre>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, at mollitia. Sed et dignissimos officia, quas expedita, saepe nisi eveniet quidem labore perferendis, vel iure quos recusandae officiis deserunt amet vero consequatur voluptas. Earum dicta iure perspiciatis ut quos nam laborum, nulla et quidem fugit voluptate voluptatibus aspernatur labore hic at doloribus consequuntur voluptatem excepturi impedit saepe fuga suscipit rerum?</p>
        <pre>
            <code class="language-scss">
                // scss

                .hello {
                    color: red;
                }
            </code>
        </pre>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta ea quibusdam error vitae nesciunt necessitatibus sit facere assumenda, quod officiis, nostrum ducimus voluptatem sed dignissimos voluptate odit accusantium commodi, expedita sint? Laborum beatae nam repellendus corrupti esse eos id, harum quaerat, animi ullam consequatur minima illo facilis dolores ut odit optio fugit. Magnam nesciunt provident deserunt eaque impedit iure ad placeat quibusdam officiis</p>
        <pre>
            <code class="language-md">
                // markup

                # Title 1
                ## Title 2
                ### Title 3
                #### Title 4
                ##### Title 5
            </code>
        </pre>

        <p>reprehenderit harum sint deleniti repellendus, cum minus cumque corporis eligendi velit, eius accusamus officia non sit animi nam. Sit distinctio optio odit, blanditiis alias quod culpa debitis quos possimus? Saepe odit optio sunt, ducimus vel quas?</p>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <pre>
            <code class="language-sql">
                // sql

                SELECT COUNT(*) AS cpt, MAX(t.pos) AS max_pos
                FROM `my_table`
                LEFT JOIN `other_table` AS t
                WHERE `somecol` IS NOT NULL
                ORDER BY t.other_col DESC
            </code>
        </pre>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A laudantium.</p>
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel soluta, nam hic cupiditate iste laboriosam fugiat, maxime aliquid, iure atque similique. Vero earum repellendus unde. Quidem maxime officiis optio nostrum error facilis laboriosam quaerat, rerum sapiente non, labore eaque ullam architecto et dignissimos accusantium dolor neque praesentium iure dolores! Soluta voluptates quasi distinctio laboriosam porro molestias debitis, fuga dolor aut perspiciatis ut ratione tenetur, iusto fugiat officia aliquid asperiores itaque consequatur ipsam? Quae fugiat, nam eligendi facere placeat tempore!</p>
    </section>

</div>

</template> 

<script>

// PrismJs pour les code blocks 
import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css"; // you can change


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
    // j'ajoute prism js pour les code blocks si le composant est monté
    Prism.highlightAll();
    // window.Prism = window.Prism || {};
    // window.Prism.manual = true;
    Prism.highlightAll();
  }
}

</script>

<style lang="scss" scoped>

// pre style est dans dans App.vue

</style>