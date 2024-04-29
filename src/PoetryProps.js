
export function PoetryProps(date, poetry) {
    let returnObject = Object.create({date: date, poetry: poetry})
    returnObject.date = date
    returnObject.poetry = poetry
    return returnObject
}

export function MasterListOfPoetry() {
    const list = []
    list.push(
        PoetryProps("4/28/24", "The mystery of life is not a problem to be solved, but a reality to be experienced."),
        PoetryProps("4/28/24", "Theres a reason acceptance is a stage of grief rather than a marker for its end."),
        PoetryProps("4/21/24", "Lover? If I describe love, it is when I am in a friendship with a woman, and I am finding gratification out of seeing her happy, at that point I think I am in love with her. ~ 50 cent"),
        PoetryProps("4/21/24", "I learned you need to destroy in order to grow. ~ Alpha Hijari"),
        PoetryProps("4/21/24", "The pain. It will leave you once it’s done teaching you. ~ Alpha Hijari"),
        PoetryProps("4/21/24", "Only a weak man can benefit from this, only a strong man can survive it. ~ Alpha Hijari"),
        PoetryProps("4/21/24", "Rock bottom teaches you things the mountain top never will."),
        PoetryProps("4/14/24", "I hate that I do not yet know you; I will struggle with the fact that the time I can spend with you is being reduced each day you are not yet in my life. ~ me"),
        PoetryProps("4/7/24", "If you want the rainbow, you have to put up the rain."),
        PoetryProps("4/7/24", "Idle hands are the devil's playground."),
        PoetryProps("4/7/24", "My trauma is not traditional trauma, having received mental or physical violence against myself, but it is the pressure to succeed, to deliver, to provide, to protect, not only for myself, but for friends and family and my partner, who ever they may be."),
        PoetryProps("4/5/24", "Rizzler. ~ Marguerite"),
        PoetryProps("3/31/24", "He is Risen!"),
        PoetryProps("3/31/24", "Christ is lord."),
        PoetryProps("3/30/24", "Never turnt down, always turnt up"),
        PoetryProps("3/17/24", "Contentment is destoryed by comparison."),
        PoetryProps("3/16/24", "A man who lacks purpose distracts himself with pleasure."),
        PoetryProps("3/15/24", "To be old and wise you must first be young and stupid."),
        PoetryProps("3/15/24", "A man does not lick his plate, unless he knows he is eating alone."),
        PoetryProps("3/13/24", "I got to the top and I got bored, there was no where else to go."),
        PoetryProps("3/12/24", "The older I get, the better I was."),
        PoetryProps("3/12/24", "Never let a positive thought go unsaid."),
        PoetryProps("3/12/24", "If you ignore your problems they are not real."),
        PoetryProps("3/11/24", "Let them shenan once, they will shenanigan."),
        PoetryProps("3/10/24", "I had a friend who self-harmed as a result of Bullying.  I asked him, Who's side are you on?"),
        PoetryProps("3/10/24", "You won't find the same person twice, not even in the same person."),
        PoetryProps("3/10/24", "In life it is either Cook or be cooked."),
        PoetryProps("3/10/24", "Never give up on a goal because of the time it takes to achieve it.  Time is going to pass anyways."),
        PoetryProps("3/10/24", "You don't know what you don't know."),
        PoetryProps("3/10/24", "Work like it depends on you, pray like it depends on GOD."),
        PoetryProps("3/10/24", "Good strategy in life makes all the difference."),
        PoetryProps("3/10/24", "If it does not bring you peace, profits, or purpose, stop giving it time, energy, or attention."),
        PoetryProps("3/10/24", "You can't always be the most talented person in the room, but you can be the most competitive."),
        PoetryProps("3/10/24", "You cannot take advice only from those who succeed but also those who have failed. ~ David Buggay"),
        PoetryProps("3/5/24", "Only women childen and dogs are loved unconditionally. Men are loved on the condition that they can provide something. ~ Chris Rock"),
        PoetryProps("3/5/24", "You have to ride the waves of rage in order to rest on the beach of peace."),
        PoetryProps("3/5/24", "You can extract a bullet from a wound, but the pain will still linger."),
        PoetryProps("3/5/24", "All buildings, regardless of how they are built, fall the same."),
        PoetryProps("3/5/24", "You cannot open a door, and tell someone how to walk through it. ~ J"),
        PoetryProps("3/5/24", "If it makes sense you must do the opposite"),
        PoetryProps("2/29/24", "Red eyes are signs of high highs and low lows. ~ me"),
        PoetryProps("2/29/24", "Whatever."),
        PoetryProps("2/29/24", "Shhh.  Everyone's brain is noisy, that's what it does it makes thoughts.  The problem is that the root of suffering is following that Brain Noise and listening to that Brain Noise, and actually identifying with it as if it is who you are. ~ Chris Evans"),
        PoetryProps("2/28/24", "Just do it. Just do it.  Don't let your dreams be dreams.  Yesterday you said tomorrow, so just do it.  Make your dreams come true. Just do it. ~ Shia Leabouf"),
        PoetryProps("2/28/24", "It was never my way or the high way.  ~ me"),
        PoetryProps("2/28/24", "It is not that my way is the right way. The right way is the right way, and I do things the right way.  ~ me"),
        PoetryProps("2/25/24", "There are two secrets of life: One, do not tell anyone everything you know."),
        PoetryProps("2/25/24", "Never tell somebody everything, you may be educating an enemy."),
        PoetryProps("2/25/24", "If the truth shall kill them ... let them die."),
        PoetryProps("2/25/24", "One week they love me, the next week they hate me.  Both weeks I get paid."),
        PoetryProps("2/25/24", "Stree does not come from hard work.  Stress primarily comes from not taking action over something that you can have some control over.  Stress comes from ignoring things you should not be ignoring. ~ Jeffrey Bezos"),
        PoetryProps("2/25/24", "If you do the right things, then the money will come.  But you don't do the right things for the money, or else they aren't the right things."),
        PoetryProps("2/24/24", "A righteous man criticizes himself more than anyone else, thereby depriving the enemy of speaking against him. ~ St. Basil the Great"),
        PoetryProps("2/24/24", "The same power that rose CHRIST from the dead lives in you. ~ Romans 8:11"),
        PoetryProps("2/23/24", "A man who blames GOD for not answering his prayers immediately, needs to thank GOD for not punishing him for his sins immediately."),
        PoetryProps("2/23/24", "Friendship is a priceless gift that cannot be bought nor sold, but its value is far greater than a mountain made of gold.  For gold is cold and lifeless and cannot see nor hear, and in time of trouble, it is powerless to cheer.  Gold it has no ears to listen, no heart to understand, it cannot bring you comfort, or reach out a helping hand.  So when you ask GOD for a gift, be thankful if HE sends, not diamonds, pearls, or riches, but the love of real true friends. ~ Muhammad Ali"),
        PoetryProps("2/23/24", "In order to train as hard as possible, you must retain a clear image of your purpose. Once your goal is sharply, but realistically defined, all that remains is carrying out your plan.  Don't worry, however, about your individual potential.  Potential is only the expression of possibility.  Something that can be assessed accurately only in retrospect.  In other words, you'll never know how good you might have become, unless you try, So let's get with it. ~ Mike Mentzer"),
        PoetryProps("2/23/24", "Love never Fails, if it fails, it was never love."),
        PoetryProps("2/23/24", "Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the LORD with a pure heart.  For we do not have a high priest who is able to feel sympathy for our weaknesses, but we have one who has been tempted in every way just as we are.  Yet HE did not sin.  Let us then approach GOD's throne of grace with confidence, so that we may recieve mercy and find grace to help us in our time of need.  So if you think you are standing firm, be careful so that you don't fall. No temptation have overtaken you, except what is common to man kind, and GOD is faithful.  HE will not let you be tempted beyond what you can bare.  But when you are tempted, HE will also provide a way out, so you can endure it."),
        PoetryProps("2/22/24", "Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come."),
        PoetryProps("2/22/24", "Do not pray for Easy Lives, pray to be Stronger Men ~ John F. Kennedy"),
        PoetryProps("2/22/24", "Launch Date")
    )
    return list
}