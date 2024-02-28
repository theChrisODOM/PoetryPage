
export function PoetryProps(date, poetry) {
    let returnObject = Object.create({date: date, poetry: poetry})
    returnObject.date = date
    returnObject.poetry = poetry
    return returnObject
}

export function MasterListOfPoetry() {
    const list = []
    list.push(
        PoetryProps("2/25/24", "There are two secrets of life: One, do not tell anyone everything you know."),
        PoetryProps("2/25/24", "Never tell somebody everything, you may be education an enemy."),
        PoetryProps("2/25/24", "If the truth shall kill them ... let them die."),
        PoetryProps("2/25/24", "One week they love me, the next week they hate me.  Both weeks I get paid."),
        PoetryProps("2/25/24", "\"Stree does not come from hard work.  Stress primarily comes from not taking action over something that you can have some control over.  Stress comes from ignoring things you should not be ignoring.\" ~ Jeffrey Bezos"),
        PoetryProps("2/25/24", "\"If you do the right things, then the money will come.  But you don't do the right things for the money, or else they aren't the right things."),
        PoetryProps("2/24/24", "\"A righteous man criticizes himself more than anyone else, thereby depriving the enemy of speaking against him.\" ~ St. Basil the Great"),
        PoetryProps("2/24/24", "\"The same power that rose CHRIST from the dead lives in you.\" ~ Romans 8:11"),
        PoetryProps("2/23/24", "A man who blames GOD for not answering his prayers immediately, needs to thank GOD for not punishing him for his sins immediately."),
        PoetryProps("2/23/24", "\"Friendship is a priceless gift that cannot be bought nor sold, but its value is far greater than a mountain made of gold.  For gold is cold and lifeless and cannot see nor hear, and in time of trouble, it is powerless to cheer.  Gold it has no ears to listen, no heart to understand, it cannot briong you comfort, or reach out a helping hand.  So when you ask GOD for a gift, be thankful if HE sends, not dimaonds, pearls, or riches, but the love of real true friends.\" ~ Muhammad Ali"),
        PoetryProps("2/23/24", "\"In order to train as hard as possible, you must retain a clear image of your purpose. Once your goal is sharply, but realisticly defined, all that remains is carrying out your plan.  Don't worry, however, about your individual potential.  Potenial is only the expression of possibility.  Something that can be assessed accurately only in retrospect.  In other words, you'll never know how good you might have become, unless you try, So let's get with it.\" ~ Mike Mentzer"),
        PoetryProps("2/23/24", "Love never Fails, if it fails, it was never love."),
        PoetryProps("2/23/24", "\"Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the LORD with a pure heart.  For we do not have a high priest who is able to feel sympathy for our weaknesses, but we have one who has been tempted in every way just as we are.  Yet HE did not sin.  Let us then approach GOD's throne of grace with confidence, so that we may recieve mercy and find grace to help us in our time of need.  So if you think you are standing firm, be careful so that you don't fall. No temptation have overtaken you, except what is common to man kind, and GOD is faithful.  HE will not let you be tempted beyond what you can bare.  But when you are tempted, HE will also provide a way out, so you can endure it.\""),
        PoetryProps("2/22/24", "\"Don't waste your time chasing butterflies. Mend your garden, and the butterflies will come.\""),
        PoetryProps("2/22/24", "\"Do not pray for Easy Lives, pray to be Stronger Men\" ~ John F. Kennedy"),
        PoetryProps("2/22/24", "Launch Date")
    )
    return list
}