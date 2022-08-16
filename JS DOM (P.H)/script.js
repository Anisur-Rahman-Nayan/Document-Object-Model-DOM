// console.log(document)
// console.log(document.body)

// console.log(document.getElementsByTagName('h3'))


const heading1 = document.getElementById('intro')
heading1.innerHTML = `<h1><b><i>Welcome to my Blog !</i></b></h1>`


const blogTitle = document.getElementsByTagName('h3')
for (h3 of blogTitle){
    // console.log(h3.innerText)
}

const colorChange = document.getElementById('second-title')
colorChange.style.backgroundColor = "tomato";

const change = document.getElementById('third-title')
change.innerText = "Here is 3rd Blog"


const classIdExample = document.getElementsByClassName('blog')
for (const x of classIdExample){
    x.style.border = '2px solid orange'
    x.style.margin = '5px'
    x.style.padding = '10px'
    x.style.borderRadius = '10px'

}

// console.log(document.querySelector('#second-blog p'))
// console.log(document.querySelectorAll('.blog'))


const secondTitle = document.getElementById('second-blog')
// console.log(secondTitle.getAttribute('id'))

const SetAtribute = document.getElementById('second-blog')
SetAtribute.setAttribute('title','I added a new feature!')

// console.log(secondTitle.parentNode)
// console.log(secondTitle.childNodes)
// console.log(secondTitle.children)



const li = document.createElement('li')
li.innerText = 'Blog-5'
const ul = document.getElementById('blog-list')
ul.appendChild(li)




// const li = document.getElementById('blog-list')
// const secondLi = li.children[1]
// li.removeChild(secondLi)




const createAtri = document.createElement('article')
// createAtri.classList.add("blog")
const heading3 = document.createElement('h3')
heading3.innerText = "My Awesome Blog-4"
const createpara = document.createElement('p')
createpara.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident incidunt error harum eos sunt iusto eius voluptatem. Animi delectus dolores cum id, cumque eius pariatur tempora reiciendis ut rerum.Iste enim, voluptatem accusamus suscipit blanditiis aut modi accusantium dolore rem vitae totam porro iusto amet non quod recusandae eligendi quae consequuntur asperiores reprehenderit quia! Quia nam laborum debitis suscipit.Quaerat similique veritatis eligendi, soluta nostrum, assumenda at cupiditate asperiores sequi ipsam vero mollitia ab voluptas. Officiis culpa unde sed, magnam ab sunt! Velit molestiae quia dolorem dolores impedit magnam.'
createAtri.appendChild(heading3)
createAtri.appendChild(createpara)

const getPLaceToAdded = document.getElementById("blogs")
getPLaceToAdded.appendChild(createAtri)



// console.log(document.getElementsByTagName('article'))