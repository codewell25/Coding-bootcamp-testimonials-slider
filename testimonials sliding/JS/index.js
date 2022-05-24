let candidateInfo = [
    {
        'name': 'Tanya Sinclair',
        'position': 'UX Engineer',
        'word': `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
        'img': 'images/image-tanya.jpg'

    },
    {
        'name': 'John Tarkpor',
        'position': 'Junior Front-end Developer',
        'word': `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confidient about starting up as a professional developer"`,
        'img': 'images/image-john.jpg'

    }
]

let candidateWord = document.getElementById('candidate-word')
var Candidatename = document.getElementById('name')
let position = document.getElementById('position')
let candidateImg = document.getElementById('candinate-img')

let prevBtn = document.getElementById('prev-btn')
let nextBtn = document.getElementById('next-btn')



nextBtn.addEventListener('click', () => {

    if (Candidatename.innerText = 'Tanya Sinclair') {
        candidateWord.innerText = candidateInfo[1].word
        Candidatename.innerText = candidateInfo[1].name
        position.innerText = candidateInfo[1].position
        candidateImg.innerHTML = '<img src="' + candidateInfo[1].img + '">'
        nextBtn.style.opacity = '0.4'
        prevBtn.style.opacity = '1'
    }

})


prevBtn.addEventListener('click', () => {
    if ((Candidatename.innerText = 'John Tarkpor')) {
        candidateWord.innerText = candidateInfo[0].word
        Candidatename.innerText = candidateInfo[0].name
        position.innerText = candidateInfo[0].position
        candidateImg.innerHTML = '<img src="' + candidateInfo[0].img + '">'
        nextBtn.style.opacity = '1'
        prevBtn.style.opacity = '0.4'
    }
})





