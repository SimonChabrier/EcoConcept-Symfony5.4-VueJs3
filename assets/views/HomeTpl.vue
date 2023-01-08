<template>
    <div>

    <span class="appSpan fill">Light section</span>
        <section class="section appLight flexRow">
            <h1>Titre de premier niveau</h1>
            <h2>Titre de second niveau</h2>
            <h3>Titre de troisième niveau</h3>
            <h4>Titre de quatrième niveau</h4>
            <h5>Titre de cinquième niveau</h5>
            <h6>Titre de sixième niveau</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quisquam blanditiis alias veritatis optio, laborum consequuntur vel non vero magni praesentium officiis nulla eaque eos excepturi aut voluptatem ipsum dolorum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quisquam blanditiis alias veritatis optio, laborum consequuntur vel non vero magni praesentium officiis nulla eaque eos excepturi aut voluptatem ipsum dolorum.</p>
        </section>   
        
    <span class="appSpan fill">Dark section</span>
        <section class="section appDark flexRow">
            <h1>Titre de premier niveau</h1>
            <h2>Titre de second niveau</h2>
            <h3>Titre de troisième niveau</h3>
            <h4>Titre de quatrième niveau</h4>
            <h5>Titre de cinquième niveau</h5>
            <h6>Titre de sixième niveau</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quisquam blanditiis alias veritatis optio, laborum consequuntur vel non vero magni praesentium officiis nulla eaque eos excepturi aut voluptatem ipsum dolorum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quisquam blanditiis alias veritatis optio, laborum consequuntur vel non vero magni praesentium officiis nulla eaque eos excepturi aut voluptatem ipsum dolorum.</p>
        </section>  

    <span class="appSpan fill">Buttons</span>
        <section class="section appDark flexColumn">
        <ButTest size="lg" type="primary">primary</ButTest>
        <ButTest size="lg" type="secondary">secondary</ButTest>
        <ButTest size="lg" type="success">success</ButTest>
        <ButTest size="lg" type="danger">danger</ButTest>
        <ButTest size="lg" type="warning">warning</ButTest>
        <ButTest size="lg" type="info">info</ButTest>
        <ButTest size="lg" type="light">light</ButTest>
        <ButTest size="lg" type="dark">dark</ButTest>
        </section>  

        <section class="section appDark flexColumn">
        <ButTest size="sm" type="primary">primary</ButTest>
        <ButTest size="sm" type="secondary">secondary</ButTest>
        <ButTest size="sm" type="success">success</ButTest>
        <ButTest size="sm" type="danger">danger</ButTest>
        <ButTest size="sm" type="warning">warning</ButTest>
        <ButTest size="sm" type="info">info</ButTest>
        <ButTest size="sm" type="light">light</ButTest>
        <ButTest size="sm" type="dark">dark</ButTest>
        </section>

        <section class="section appDark flexColumn">
        <ButTest size="xs" type="primary">primary</ButTest>
        <ButTest size="xs" type="secondary">secondary</ButTest>
        <ButTest size="xs" type="success">success</ButTest>
        <ButTest size="xs" type="danger">danger</ButTest>
        <ButTest size="xs" type="warning">warning</ButTest>
        <ButTest size="xs" type="info">info</ButTest>
        <ButTest size="xs" type="light">light</ButTest>
        <ButTest size="xs" type="dark">dark</ButTest>
        </section> 

    <span class="appSpan fill">List</span>
        <section class="section appDark flexColumn">
            <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>

            <ol>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ol>
        </section>  

    <span class="appSpan fill">Table</span>
        <section class="section appDark flexColumn">
            
            <table>
                <thead>
                    <tr>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </table>

        </section>
        
        <section class="section appLight flexColumn">           
            <table>
                <thead>
                    <tr>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>

                </tbody>
            </table>
        </section>  
        
    <span class="appSpan fill">Form</span>
        <section class="section appLight">

            <form action="" class="appForm" method="POST">

                <label for="text">Texte</label>
                <input type="text" placeholder="Text input"> 
                <small class="help">This is a help text</small>

                <label for="password">Password</label>
                <input type="password" placeholder="Password input">
                <small class="help">This is a help text</small>

                <label for="email">email</label>
                <input type="email" placeholder="Email input">
                <small class="help">This is a help text</small>

                <label for="number">number</label>
                <input type="number" placeholder="Number input">
                <small class="help">This is a help text</small>

                <label for="date">date</label>
                <input type="date" placeholder="Date input">
                <small class="help">This is a help text</small>

                <label for="time">time</label>
                <input type="time" placeholder="Time input">
                <small class="help">This is a help text</small>

                <label for="datetime">datetime</label>
                <input type="datetime" placeholder="Datetime input">
                <small class="help">This is a help text</small>

                <label for="datetime-local">datetime-local</label>
                <input type="datetime-local" placeholder="Datetime-local input">
                <small class="help">This is a help text</small>

                <label for="month">month</label>
                <input type="month" placeholder="Month input">
                <small class="help">This is a help text</small>

                <label for="week">week</label>
                <input type="week" placeholder="Week input">
                <small class="help">This is a help text</small>

                <label for="url">url</label>
                <input type="url" placeholder="Url input">
                <small class="help">This is a help text</small>

                <label for="search">search</label>
                <input type="search" placeholder="Search input">
                <small class="help">This is a help text</small>

                <label for="tel">tel</label>
                <input type="tel" placeholder="Tel input">
                <small class="help">This is a help text</small>

                <label for="color">color</label>
                <input type="color" placeholder="Color input">
                <small class="help">This is a help text</small>

                <label for="range">range</label>
                <input type="range" placeholder="Range input">
                <small class="help">This is a help text</small>

                <label for="file">file</label>
                <input type="file" placeholder="File input">
                <small class="help">This is a help text</small>

                <label for="textarea">textarea</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Textarea"></textarea>
                <small class="help">This is a help text</small>

                <label for="select">select</label>
                <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                    <option value="">Option 5</option>
                </select>
                <small class="help">This is a help text</small>

                
                <label for="selectMultiple">selectMultiple</label>
                <select name="" id="" multiple>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                    <option value="">Option 5</option>
                </select>
                <small class="help">This is a help text</small>

                <label for="checkbox">checkbox</label>
                <section class="boxAndRadio">
                    choix 1 <input type="checkbox" placeholder="Checkbox input">
                    choix 2 <input type="checkbox" placeholder="Checkbox input">
                    choix 3 <input type="checkbox" placeholder="Checkbox input">
                </section>

                <label for="radio">radio</label>
                <section class="boxAndRadio">
                    choix 1<input type="radio" placeholder="Radio input">
                    choix 2<input type="radio" placeholder="Radio input" >
                </section>

                <label for="submit">submit</label>
                <input type="submit" placeholder="Submit input" @click.prevent="submitForm()">

                <label for="reset">reset</label>
                <input type="reset" placeholder="Reset input" @click.prevent="resetForm()">

            </form>

        </section>

    </div>
</template>

<script>

import ButTest from '../components/elements/ButTest.vue';

export default {

    name: 'HomeTpl',

    components: {
        ButTest
    },

    data() {
        return {
            //
        }
    },

    methods: {
        submitForm() {
            console.log('submit');
        },
        resetForm() {
            console.log('reset');
        }
    }

}



</script>

<style lang="scss" scoped>

</style>