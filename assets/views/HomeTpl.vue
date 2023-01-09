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

    <span class="appSpan fill">Avatar</span>
    <section class="section appLight">
        <AvatarComponent :active="true" size="lg" :image="image" username="simon"/>
        <AvatarComponent :active="false" size="lg" :image="image" />

        <AvatarComponent :active="true" size="sm" :image="image" username="Paul"/>
        <AvatarComponent :active="false" size="sm" :image="image" />

        <AvatarComponent :active="true" size="xs" :image="image" username="Jean dsfqsdfqsdfqsdfqsdfqsdf"/>
        <AvatarComponent :active="false" size="xs" :image="image" />
    </section>

    <span class="appSpan fill">Buttons</span>
        <section class="section appDark flexColumn">
        <ButtonComponent size="lg" type="primary">primary</ButtonComponent>
        <ButtonComponent size="lg" type="secondary">secondary</ButtonComponent>
        <ButtonComponent size="lg" type="success">success</ButtonComponent>
        <ButtonComponent size="lg" type="danger">danger</ButtonComponent>
        <ButtonComponent size="lg" type="warning">warning</ButtonComponent>
        <ButtonComponent size="lg" type="info">info</ButtonComponent>
        <ButtonComponent size="lg" type="light">light</ButtonComponent>
        <ButtonComponent size="lg" type="dark">dark</ButtonComponent>
        </section>  

        <section class="section appDark flexColumn">
        <ButtonComponent size="sm" type="primary">primary</ButtonComponent>
        <ButtonComponent size="sm" type="secondary">secondary</ButtonComponent>
        <ButtonComponent size="sm" type="success">success</ButtonComponent>
        <ButtonComponent size="sm" type="danger">danger</ButtonComponent>
        <ButtonComponent size="sm" type="warning">warning</ButtonComponent>
        <ButtonComponent size="sm" type="info">info</ButtonComponent>
        <ButtonComponent size="sm" type="light">light</ButtonComponent>
        <ButtonComponent size="sm" type="dark">dark</ButtonComponent>
        </section>

        <section class="section appDark flexColumn">
        <ButtonComponent size="xs" type="primary">primary</ButtonComponent>
        <ButtonComponent size="xs" type="secondary">secondary</ButtonComponent>
        <ButtonComponent size="xs" type="success">success</ButtonComponent>
        <ButtonComponent size="xs" type="danger">danger</ButtonComponent>
        <ButtonComponent size="xs" type="warning">warning</ButtonComponent>
        <ButtonComponent size="xs" type="info">info</ButtonComponent>
        <ButtonComponent size="xs" type="light">light</ButtonComponent>
        <ButtonComponent size="xs" type="dark">dark</ButtonComponent>
        </section> 

    <span class="appSpan fill">Tags</span>
        <section class="section appLight flexColumn">
            <TagComponent color="primary">Primary</TagComponent>
            <TagComponent color="secondary">Secondary</TagComponent>
            <TagComponent color="success">Success</TagComponent>
            <TagComponent color="danger">Danger</TagComponent>
            <TagComponent color="warning">Warning</TagComponent>
            <TagComponent color="info">Info</TagComponent>
            <TagComponent color="light">Light</TagComponent>
            <TagComponent color="dark">Dark</TagComponent>
        </section>

    <span class="appSpan fill">Banner full width</span>
        <section class="section appLight flexRow">
            <BannerComponent text="© 2022 - Tous droits réservés" color="primary" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="secondary" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="success" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="danger" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="warning" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="info" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="dark" />
            <BannerComponent text="© 2022 - Tous droits réservés" color="light" />
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

    <span class="appSpan fill">Card</span>
        <section class="section appLight">
            <CardComponent title="Card title" color="primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="success">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="danger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="warning">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
            <CardComponent title="Card title" color="dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </CardComponent>
        </section>  
        
    <span class="appSpan fill">Form</span>
        <section class="section appLight">

            <form action="" class="appForm" method="POST">

                <label for="text">Texte</label>
                <input type="text" id="" name="" placeholder="Text input"> 
                <small class="help">This is a help text</small>

                <label for="password">Password</label>
                <input type="password" id="" name="" placeholder="Password input">
                <small class="help">This is a help text</small>

                <label for="email">email</label>
                <input type="email" id="" name="" placeholder="Email input">
                <small class="help">This is a help text</small>

                <label for="number">number</label>
                <input type="number" id="" name="" placeholder="Number input">
                <small class="help">This is a help text</small>

                <label for="date">date</label>
                <input type="date" id="" name="" placeholder="Date input">
                <small class="help">This is a help text</small>

                <label for="time">time</label>
                <input type="time" id="" name="" placeholder="Time input">
                <small class="help">This is a help text</small>

                <label for="datetime">datetime</label>
                <input type="datetime" id="" name="" placeholder="Datetime input">
                <small class="help">This is a help text</small>

                <label for="datetime-local">datetime-local</label>
                <input type="datetime-local" id="" name="" placeholder="Datetime-local input">
                <small class="help">This is a help text</small>

                <label for="month">month</label>
                <input type="month" id="" name="" placeholder="Month input">
                <small class="help">This is a help text</small>

                <label for="week">week</label>
                <input type="week" id="" name="" placeholder="Week input">
                <small class="help">This is a help text</small>

                <label for="url">url</label>
                <input type="url" id="" name="" placeholder="Url input">
                <small class="help">This is a help text</small>

                <label for="search">search</label>
                <input type="search" id="" name="" placeholder="Search input">
                <small class="help">This is a help text</small>

                <label for="tel">tel</label>
                <input type="tel" id="" name="" placeholder="Tel input">
                <small class="help">This is a help text</small>

                <label for="color">color</label>
                <input type="color" id="" name="" placeholder="Color input">
                <small class="help">This is a help text</small>

                <label for="range">range</label>
                <input type="range" id="" name="" placeholder="Range input">
                <small class="help">This is a help text</small>

                <label for="file">file</label>
                <input type="file" id="" name="" placeholder="File input">
                <small class="help">This is a help text</small>

                <label for="textarea">textarea</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Textarea"></textarea>
                <small class="help">This is a help text</small>

                <label for="select">select</label>
                <select name="" id="">
                    <option id="" name="" value="" >Option 1</option>
                    <option id="" name="" value="" >Option 2</option>
                    <option id="" name="" value="" >Option 3</option>
                    <option id="" name="" value="" >Option 4</option>
                    <option id="" name="" value="" >Option 5</option>
                </select>
                <small class="help">This is a help text</small>

                
                <label for="selectMultiple">selectMultiple</label>
                <select name="" id="" multiple>
                    <option id="" name="" value="" >Option 1</option>
                    <option id="" name="" value="" >Option 2</option>
                    <option id="" name="" value="" >Option 3</option>
                    <option id="" name="" value="" >Option 4</option>
                    <option id="" name="" value="" >Option 5</option>
                </select>
                <small class="help">This is a help text</small>

                <fieldset>
                <legend>Balise legend - Checkboxes</legend>
                    <section class="boxAndRadio">
                        <label for="1">Choix 1</label>
                            <input type="checkbox" placeholder="Checkbox input" id="" name="" value="" >
                        <label for="1">Choix 2</label>
                            <input type="checkbox" placeholder="Checkbox input" id="" name="" value="" >
                        <label for="1">Choix 3</label>
                            <input type="checkbox" placeholder="Checkbox input" id="" name="" value="" >
                    </section>
                </fieldset>


                <fieldset>
                <legend>Balise legend - Radio</legend>
                    <section class="boxAndRadio">
                        <label for="huey">Huey</label>
                        <input type="radio" id="huey" name="drone" value="huey" checked>
                        
                        <label for="dewey">Dewey</label>
                        <input type="radio" id="dewey" name="drone" value="dewey">
                        
                        <label for="louie">Louie</label>
                        <input type="radio" id="louie" name="drone" value="louie">
                        
                    </section>
                </fieldset>


                <label for="submit">submit</label>
                <input type="submit" placeholder="Submit input" @click.prevent="submitForm()">

                <label for="reset">reset</label>
                <input type="reset" placeholder="Reset input" @click.prevent="resetForm()">

            </form>

        </section>

    </div>


</template>

<script>

import ButtonComponent from '@/components/elements/ButtonComponent.vue';
import CardComponent from '@/components/elements/CardComponent.vue';
import TagComponent from '@/components/elements/TagComponent.vue';
import AvatarComponent from '@/components/elements/AvatarComponent.vue';
import BannerComponent from '@/components/elements/BannerComponent.vue';

export default {

    name: 'HomeTpl',

    components: {
        ButtonComponent,
        CardComponent,
        TagComponent,
        AvatarComponent,
        BannerComponent
    },

    data() {
        return {
            message: 'Hello World',
            image: 'https://picsum.photos/150/150'
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