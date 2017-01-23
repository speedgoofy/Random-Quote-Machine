$(function() {


    var quotes = [
        {auther: "Elon Musk", qoute: "Patience is a virtue, and I'm learning patience. It's a tough lesson."},
        {auther: "Elon Musk", qoute: "Failure is an option here. If things are not failing, you are not innovating enough."},
        {auther: "Elon Musk", qoute: "It's OK to have your eggs in one basket as long as you control what happens to that basket."},
        {auther: "Elon Musk", qoute: "My biggest mistake is probably weighing too much on someone's talent and not someone's personality. I think it matters whether someone has a good heart."},
        {auther: "Elon Musk", qoute: "Some people don't like change, but you need to embrace change if the alternative is disaster."},
        {auther: "Thomas Edison", qoute: "I have not failed. I've just found 10,000 ways that won't work."},
        {auther: "Thomas Edison", qoute: "Genius is one percent inspiration and ninety-nine percent perspiration."},
        {auther: "Thomas Edison", qoute: "Opportunity is missed by most people because it is dressed in overalls and looks like work."},
        {auther: "Thomas Edison", qoute: "If we all did the things we are capable of doing, we would literally astound ourselves."},
        {auther: "Thomas Edison", qoute: "Hell, there are no rules here - we're trying to accomplish something."},
        {auther: "Thomas Edison", qoute: "Show me a thoroughly satisfied man and I will show you a failure."},
        {auther: "Thomas Edison", qoute: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."},
        {auther: "Thomas Edison", qoute: "Just because something doesn't do what you planned it to do doesn't mean it's useless."},
        {auther: "Thomas Edison", qoute: "Everything comes to him who hustles while he waits."},
        {auther: "Albert Einstein", qoute: "Imagination is more important than knowledge."},
        {auther: "Albert Einstein", qoute: "The important thing is not to stop questioning. Curiosity has its own reason for existing."},
        {auther: "Albert Einstein", qoute: "Anyone who has never made a mistake has never tried anything new."},
        {auther: "Nikola Tesla", qoute: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more."},
        {auther: "Nikola Tesla", qoute: "The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane."},
        {auther: "Nikola Tesla", qoute: "The present is theirs; the future, for which I really worked, is mine."},
        {auther: "Nikola Tesla", qoute: "I do not think you can name many great inventions that have been made by married men."},
        {auther: "Nikola Tesla", qoute: "The spread of civilisation may be likened to a fire; first, a feeble spark, next a flickering flame, then a mighty blaze, ever increasing in speed and power."},
        {auther: "Leonardo da Vinci", qoute: "Simplicity is the ultimate sophistication."},
        {auther: "Leonardo da Vinci", qoute: "As a well-spent day brings happy sleep, so a life well spent brings happy death."},
        {auther: "Leonardo da Vinci", qoute: "Learning never exhausts the mind."},
        {auther: "Leonardo da Vinci", qoute: "Art is never finished, only abandoned."},
        {auther: "Henry Ford", qoute: "If you think you can do a thing or think you can't do a thing, you're right."},
    ];

    updateSite();

    // toggle the side menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    // get new quote function 
    $("#qoute-button").on('click', function() {
        updateSite();
    });

    $("#twitter-button").attr("href", 'https://twitter.com/intent/tweet?text=' + "hello");


    /***************************************************
                       Functions
    ***************************************************/

    function updateSite(){
        var color = createRGBColor();
        var quote = quotes[getRandomNumber(0, quotes.length - 1)];

        updateSiteColors(color);
        updateQuoteText(quote);
    }


    // -------  Update background color    -------//  

    function updateSiteColors(color) {
        $('body').css('background-color', 'rgb(' + color + ')');
        $('#qoute-text').css('color', 'rgb(' + color + ')');
        $('#qoute-arthor').css('color', 'rgb(' + color + ')');
        $('#qoute-button').css('background-color', 'rgb(' + color + ')');
        $('.fa-twitter-square').css('color', 'rgb(' + color + ')');
    }


    // -------  Update qoute    -------//  

    function updateQuoteText(qoute) {
        $('#qoute-text').html(qoute.qoute);
        $('#qoute-arthor').html(qoute.auther);
    }
    
    
    // -------  Creates a RGB color   -------//  

    function createRGBColor() {
        for (var i = 0, rgbColor = []; i < 3; i++){
            rgbColor.push(getRandomNumber(0, 255));
        }

        return rgbColor.join();
    }


    // ---------   Creates a random number between 0-255   ---------//

    function getRandomNumber(min, max) {
        return  Math.ceil(Math.random() * (max - min) + min);
    }

});