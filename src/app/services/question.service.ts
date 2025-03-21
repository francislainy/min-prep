import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsDB: Question[] = [
    // God
    { category: "God - Who Is God?", question: "Does God Exist?", url: "/en/bible-teachings/questions/does-god-exist/" },
    { category: "God - Who Is God?", question: "Is God an Impersonal Force?", url: "/en/bible-teachings/questions/gods-force/" },
    { category: "God - Who Is God?", question: "Is God Everywhere, Omnipresent?", url: "/en/bible-teachings/questions/god-omnipresent/" },
    { category: "God - Who Is God?", question: "Has Anyone Ever Seen God?", url: "/en/bible-teachings/questions/see-god/" },
    { category: "God - Who Is God?", question: "Is the Trinity Doctrine in the Bible?", url: "/en/bible-teachings/questions/trinity/" },
    { category: "God - Who Is God?", question: "Is Mary the Mother of God?", url: "/en/bible-teachings/questions/mother-mary-theotokos/" },
    { category: "God - Who Is God?", question: "Does God Change His Mind?", url: "/en/bible-teachings/questions/does-god-change-his-mind/" },
    { category: "God - Who Is God?", question: "What Is the Holy Spirit?", url: "/en/bible-teachings/questions/what-is-the-holy-spirit/" },

    { category: "God - God’s Name", question: "Does God Have a Name?", url: "/en/bible-teachings/questions/gods-name/" },
    { category: "God - God’s Name", question: "Is God’s Name Jesus?", url: "/en/bible-teachings/questions/is-gods-name-jesus/" },
    { category: "God - God’s Name", question: "Who Is Jehovah?", url: "/en/bible-teachings/questions/who-is-jehovah/" },
    { category: "God - God’s Name", question: "Has Anyone Ever Seen God?", url: "/en/bible-teachings/questions/see-god/" },
    { category: "God - God’s Name", question: "How Many Names Does God Have?", url: "/en/bible-teachings/questions/names-of-god/" },
    { category: "God - God’s Name", question: "Is Mary the Mother of God?", url: "/en/bible-teachings/questions/mother-mary-theotokos/" },
    { category: "God - God’s Name", question: "Does God Change His Mind?", url: "/en/bible-teachings/questions/does-god-change-his-mind/" },
    { category: "God - God’s Name", question: "What Is the Holy Spirit?", url: "/en/bible-teachings/questions/what-is-the-holy-spirit/" },

    { category: "God - God’s Will", question: "What Is the Will of God for My Life?", url: "/en/bible-teachings/questions/will-of-god/" },
    { category: "God - God’s Will", question: "What Does the Bible Say About Free Will? Is God in Control?", url: "/en/bible-teachings/questions/free-will-in-the-bible/" },
    { category: "God - God’s Will", question: "How Can You Know God Personally?", url: "/en/bible-teachings/questions/knowing-god-personally-get-closer/" },
    { category: "God - God’s Will", question: "Is God to Blame for Our Suffering?", url: "/en/bible-teachings/questions/our-suffering/" },

    // The Bible
    { category: "The Bible - Origin and Authenticity", question: "What Is the Bible?", url: "/en/bible-teachings/questions/what-is-the-bible/" },
    { category: "The Bible - Origin and Authenticity", question: "Is the Bible a Book of Human Wisdom?", url: "/en/bible-teachings/questions/bible-wisdom/" },
    { category: "The Bible - Origin and Authenticity", question: "Is the Bible a Record of God’s Thoughts?", url: "/en/bible-teachings/questions/gods-thoughts/" },
    { category: "The Bible - Origin and Authenticity", question: "Did Moses Write the Bible?", url: "/en/bible-teachings/questions/moses-writings/" },
    { category: "The Bible - Origin and Authenticity", question: "Can Anyone Know Who Really Wrote the Bible?", url: "/en/bible-teachings/questions/who-wrote-the-bible/" },
    { category: "The Bible - Origin and Authenticity", question: "Has the Bible Been Changed or Tampered With?", url: "/en/bible-teachings/questions/has-the-bible-been-changed/" },
    { category: "The Bible - Origin and Authenticity", question: "When Did God Begin to Create the Universe?", url: "/en/bible-teachings/questions/days-of-creation-universe/" },
    { category: "The Bible - Origin and Authenticity", question: "Does Science Agree With the Bible?", url: "/en/bible-teachings/questions/science-and-the-bible/" },
    { category: "The Bible - Origin and Authenticity", question: "Does the Bible Teach That the Earth Is Flat?", url: "/en/bible-teachings/questions/flat-earth/" },
    { category: "The Bible - Origin and Authenticity", question: "Is the Bible a White Man’s Book?", url: "/en/bible-teachings/questions/bible-not-white-mans/" },
    { category: "The Bible - Origin and Authenticity", question: "When Were the Accounts About Jesus Written?", url: "/en/bible-teachings/questions/when-gospels-written/" },

    { category: "The Bible - Reading and Understanding the Bible", question: "What Are the Keys to Understanding the Bible?", url: "/en/bible-teachings/questions/understanding-the-bible/" },
    { category: "The Bible - Reading and Understanding the Bible", question: "Are There Contradictions in the Bible?", url: "/en/bible-teachings/questions/are-there-contradictions-in-the-bible/" },
    { category: "The Bible - Reading and Understanding the Bible", question: "Who or What Is the Word of God?", url: "/en/bible-teachings/questions/word-of-god/" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Does “an Eye for an Eye” Mean?", url: "/en/bible-teachings/questions/eye-for-an-eye/" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Are the Ten Commandments of God?", url: "/en/bible-teachings/questions/10-commandments/" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Does It Mean to Be a “Good Samaritan”?", url: "/en/bible-teachings/questions/good-samaritan-meaning/" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Is the Torah?", url: "/en/bible-teachings/questions/torah-pentateuch/" },

    { category: "The Bible - Prophecy and Symbolism", question: "What Is Prophecy?", url: "/en/bible-teachings/questions/bible-prophecy/" },
    { category: "The Bible - Prophecy and Symbolism", question: "Do Messianic Prophecies Prove That Jesus Was the Messiah?", url: "/en/bible-teachings/questions/messianic-prophecies-jesus-messiah-meaning/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Do Numbers Mean in the Bible? Is Numerology Biblical?", url: "/en/bible-teachings/questions/biblical-meaning-of-numbers/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Does Bible Chronology Indicate About the Year 1914?", url: "/en/bible-teachings/questions/daniel-4-bible-chronology-1914/" },
    { category: "The Bible - Prophecy and Symbolism", question: "The Book of Revelation — What Does It Mean?", url: "/en/bible-teachings/questions/the-book-of-revelation/" },
    { category: "The Bible - Prophecy and Symbolism", question: "Who or What Is “the Alpha and the Omega”?", url: "/en/bible-teachings/questions/alpha-omega/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is New Jerusalem?", url: "/en/bible-teachings/questions/new-jerusalem/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is the Seven-Headed Wild Beast of Revelation Chapter 13?", url: "/en/bible-teachings/questions/revelation-13-beast/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is the Scarlet-Colored Beast of Revelation Chapter 17?", url: "/en/bible-teachings/questions/scarlet-beast-of-revelation-17/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Does 666 Mean?", url: "/en/bible-teachings/questions/what-does-666-mean/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is Babylon the Great?", url: "/en/bible-teachings/questions/babylon-the-great/" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is the Lake of Fire? Is It the Same as Hell or Gehenna?", url: "/en/bible-teachings/questions/lake-of-fire/" },
    { category: "The Bible - Prophecy and Symbolism", question: "Who Were the Rich Man and Lazarus?", url: "/en/bible-teachings/questions/rich-man-and-lazarus/" },

    { category: "The Bible - End of the World", question: "What Is the Sign of “the Last Days,” or “End Times”?", url: "/en/bible-teachings/questions/last-days-sign-end-times-prophecies/" },
    { category: "The Bible - End of the World", question: "Did the Bible Predict the Way People Think and Act Today?", url: "/en/bible-teachings/questions/2-timothy-3-perilous-times/" },
    { category: "The Bible - End of the World", question: "What Is the Great Tribulation?", url: "/en/bible-teachings/questions/great-tribulation/" },
    { category: "The Bible - End of the World", question: "What Is the Battle of Armageddon?", url: "/en/bible-teachings/questions/battle-of-armageddon/" },
    { category: "The Bible - End of the World", question: "Will the Earth Be Destroyed?", url: "/en/bible-teachings/questions/earth-destroyed/" },
    { category: "The Bible - End of the World", question: "When Will the World End?", url: "/en/bible-teachings/questions/end-of-the-world/" },
    { category: "The Bible - End of the World", question: "What Will God’s Kingdom Accomplish?", url: "/en/bible-teachings/questions/what-gods-kingdom-will-do/" },
    { category: "The Bible - End of the World", question: "Peace on Earth—How Will It Come?", url: "/en/bible-teachings/questions/peace-on-earth-how/" },

    { category: "The Bible - People, Places, and Things", question: "Women in the Bible — What Can We Learn From Them?", url: "/en/bible-teachings/questions/women-in-the-bible/" },
    { category: "The Bible - People, Places, and Things", question: "Is Mary the Mother of God?", url: "/en/bible-teachings/questions/mother-mary-theotokos/" },
    { category: "The Bible - People, Places, and Things", question: "The Virgin Mary — What Does the Bible Say About Her?", url: "/en/bible-teachings/questions/virgin-mary-immaculate-conception/" },
    { category: "The Bible - People, Places, and Things", question: "Who Was John the Baptist?", url: "/en/bible-teachings/questions/who-was-john-the-baptist/" },
    { category: "The Bible - People, Places, and Things", question: "Who Was Mary Magdalene?", url: "/en/bible-teachings/questions/mary-magdalene/" },
    { category: "The Bible - People, Places, and Things", question: "What Does the Bible Say About Daniel?", url: "/en/bible-teachings/questions/daniel-in-the-bible/" },
    { category: "The Bible - People, Places, and Things", question: "Who Was Cain’s Wife?", url: "/en/bible-teachings/questions/who-was-cains-wife/" },
    { category: "The Bible - People, Places, and Things", question: "The Story of Noah and the Great Flood — Is It Just a Myth?", url: "/en/bible-teachings/questions/great-flood-noahs-ark-story/" },
    { category: "The Bible - People, Places, and Things", question: "What Is the Ark of the Covenant?", url: "/en/bible-teachings/questions/ark-of-the-covenant/" },
    { category: "The Bible - People, Places, and Things", question: "Is the Shroud of Turin the Burial Cloth of Jesus?", url: "/en/bible-teachings/questions/shroud-of-turin-jesus-burial/" },
    { category: "The Bible - People, Places, and Things", question: "What Does the Bible Say About Dinosaurs?", url: "/en/bible-teachings/questions/dinosaurs-in-the-bible/" },

    { category: "The Bible - Practical Value", question: "Can the Bible Help Me to Have a Happy Family?", url: "/en/bible-teachings/questions/happy-family/" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Friendship?", url: "/en/bible-teachings/questions/friends-in-the-bible/" },
    { category: "The Bible - Practical Value", question: "What Is the Golden Rule?", url: "/en/bible-teachings/questions/golden-rule/" },
    { category: "The Bible - Practical Value", question: "What Does It Mean to “Love Your Enemies”?", url: "/en/bible-teachings/questions/love-your-enemies-meaning/" },
    { category: "The Bible - Practical Value", question: "How Can I Make Good Decisions?", url: "/en/bible-teachings/questions/good-decisions-bible-verses/" },
    { category: "The Bible - Practical Value", question: "Where Can I Find Hope?", url: "/en/bible-teachings/questions/hope-bible-verses/" },
    { category: "The Bible - Practical Value", question: "Is Money the Root of All Evil?", url: "/en/bible-teachings/questions/money-root-of-evil/" },
    { category: "The Bible - Practical Value", question: "Money Problems and Debt—Can the Bible Help?", url: "/en/bible-teachings/questions/money-and-the-bible/" },
    { category: "The Bible - Practical Value", question: "Living With Chronic Illness — Can the Bible Help?", url: "/en/bible-teachings/questions/living-with-chronic-illness/" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Revenge?", url: "/en/bible-teachings/questions/bible-about-revenge/" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Anger?", url: "/en/bible-teachings/questions/bible-about-anger/" },
    { category: "The Bible - Practical Value", question: "Can the Bible Help Me if I’m Depressed?", url: "/en/bible-teachings/questions/bible-help-depressed/" },
    { category: "The Bible - Practical Value", question: "Can Religion, God, or the Bible Help You Feel Better About Your Life?", url: "/en/bible-teachings/questions/feel-good/" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Loving Yourself?", url: "/en/bible-teachings/questions/love-yourself/" },

    // Jesus
    { category: "Jesus - Who Is Jesus?", question: "Was Jesus Just a Good Man?", url: "/en/bible-teachings/questions/jesus-good-man/" },
    { category: "Jesus - Who Is Jesus?", question: "Is Jesus Almighty God?", url: "/en/bible-teachings/questions/is-jesus-almighty/" },
    { category: "Jesus - Who Is Jesus?", question: "Why Is Jesus Called the Son of God?", url: "/en/bible-teachings/questions/jesus-son-of-god/" },
    { category: "Jesus - Who Is Jesus?", question: "Do Messianic Prophecies Prove That Jesus Was the Messiah?", url: "/en/bible-teachings/questions/messianic-prophecies-jesus-messiah-meaning/" },
    { category: "Jesus - Who Is Jesus?", question: "Who Is the Antichrist?", url: "/en/bible-teachings/questions/antichrist/" },
    { category: "Jesus - Who Is Jesus?", question: "Who or What Is the Word of God?", url: "/en/bible-teachings/questions/word-of-god/" },
    { category: "Jesus - Who Is Jesus?", question: "Who Is the Archangel Michael?", url: "/en/bible-teachings/questions/archangel-michael/" },

    { category: "Jesus - Jesus’ Life on Earth", question: "When Was Jesus Born?", url: "/en/bible-teachings/questions/when-was-jesus-born/" },
    { category: "Jesus - Jesus’ Life on Earth", question: "The Virgin Mary — What Does the Bible Say About Her?", url: "/en/bible-teachings/questions/virgin-mary-immaculate-conception/" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Who Were the “Three Wise Men”? Did They Follow the “Star” of Bethlehem?", url: "/en/bible-teachings/questions/three-wise-men-star-of-bethlehem/" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Do Scholars Believe That Jesus Existed?", url: "/en/bible-teachings/questions/did-jesus-exist/" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Does the Bible Contain an Accurate Record of Jesus’ Life?", url: "/en/bible-teachings/questions/bible-record-jesus-life/" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Was Jesus Married? Did Jesus Have Siblings?", url: "/en/bible-teachings/questions/was-jesus-married/" },
    { category: "Jesus - Jesus’ Life on Earth", question: "When Were the Accounts About Jesus Written?", url: "/en/bible-teachings/questions/when-gospels-written/" },

    { category: "Jesus - Jesus’ Death and Resurrection", question: "Why Did Jesus Die?", url: "/en/bible-teachings/questions/why-did-jesus-die/" },
    { category: "Jesus - Jesus’ Death and Resurrection", question: "Did Jesus Die on a Cross?", url: "/en/bible-teachings/questions/did-jesus-die-on-cross/" },
    { category: "Jesus - Jesus’ Death and Resurrection", question: "Is the Shroud of Turin the Burial Cloth of Jesus?", url: "/en/bible-teachings/questions/shroud-of-turin-jesus-burial/" },
    { category: "Jesus - Jesus’ Death and Resurrection", question: "After Jesus’ Resurrection, Was His Body Flesh or Spirit?", url: "/en/bible-teachings/questions/jesus-body/" },

    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "Jesus Saves — How?", url: "/en/bible-teachings/questions/jesus-saves/" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "Is Belief in Jesus Enough for Salvation?", url: "/en/bible-teachings/questions/believe-in-jesus-salvation-sinners-prayer/" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "How Is Jesus’ Sacrifice “a Ransom for Many”?", url: "/en/bible-teachings/questions/jesus-sacrifice-ransom/" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "Why Pray in Jesus’ Name?", url: "/en/bible-teachings/questions/pray-in-jesus-name/" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "What Is the Coming of Christ?", url: "/en/bible-teachings/questions/jesus-coming/" },

    // God's kingdom
    { category: "God’s Kingdom", question: "What Is the Kingdom of God?", url: "/en/bible-teachings/questions/what-is-gods-kingdom/" },
    { category: "God’s Kingdom", question: "Is the Kingdom of God in Your Heart?", url: "/en/bible-teachings/questions/kingdom-in-heart/" },
    { category: "God’s Kingdom", question: "What Will God’s Kingdom Accomplish?", url: "/en/bible-teachings/questions/what-gods-kingdom-will-do/" },
    { category: "God’s Kingdom", question: "What Does Bible Chronology Indicate About the Year 1914?", url: "/en/bible-teachings/questions/daniel-4-bible-chronology-1914/" },
    { category: "God’s Kingdom", question: "Peace on Earth—How Will It Come?", url: "/en/bible-teachings/questions/peace-on-earth-how/" },
    { category: "God’s Kingdom", question: "What Are “the Keys of the Kingdom”?", url: "/en/bible-teachings/questions/kingdom-keys/" },

    // Spirit Realm
    { category: "Spirit Realm - Heaven", question: "What Is Heaven?", url: "/en/bible-teachings/questions/what-is-heaven/" },
    { category: "Spirit Realm - Heaven", question: "Who Go to Heaven?", url: "/en/bible-teachings/questions/go-to-heaven/" },
    { category: "Spirit Realm - Heaven", question: "What Is New Jerusalem?", url: "/en/bible-teachings/questions/new-jerusalem/" },
    { category: "Spirit Realm - Heaven", question: "Does God Live in a Specific Location?", url: "/en/bible-teachings/questions/where-god-lives/" },

    { category: "Spirit Realm - Angels", question: "Who or What Are Angels?", url: "/en/bible-teachings/questions/what-are-angels/" },
    { category: "Spirit Realm - Angels", question: "Who Is the Archangel Michael?", url: "/en/bible-teachings/questions/archangel-michael/" },

    { category: "Spirit Realm - Devil and Demons", question: "Is the Devil Real?", url: "/en/bible-teachings/questions/is-the-devil-real/" },
    { category: "Spirit Realm - Devil and Demons", question: "Did God Create the Devil?", url: "/en/bible-teachings/questions/did-god-create-the-devil/" },
    { category: "Spirit Realm - Devil and Demons", question: "What Does the Devil Look Like?", url: "/en/bible-teachings/questions/what-does-the-devil-look-like/" },
    { category: "Spirit Realm - Devil and Demons", question: "Where Does the Devil Live?", url: "/en/bible-teachings/questions/where-does-the-devil-live/" },
    { category: "Spirit Realm - Devil and Demons", question: "Can the Devil Control Humans?", url: "/en/bible-teachings/questions/devil-demon-control/" },
    { category: "Spirit Realm - Devil and Demons", question: "Is the Devil the Cause of All Suffering?", url: "/en/bible-teachings/questions/cause-of-suffering/" },
    { category: "Spirit Realm - Devil and Demons", question: "Are Demons Real?", url: "/en/bible-teachings/questions/are-demons-real/" },
    { category: "Spirit Realm - Devil and Demons", question: "Who Were the Nephilim?", url: "/en/bible-teachings/questions/nephilim-giants/" },

    // Life & Death
    { category: "Life and Death - Life", question: "What Is the Meaning of Life?", url: "/en/bible-teachings/questions/meaning-of-life/" },
    { category: "Life and Death - Life", question: "What Is the Will of God for My Life?", url: "/en/bible-teachings/questions/will-of-god/" },
    { category: "Life and Death - Life", question: "How Can You Live Forever?", url: "/en/bible-teachings/questions/live-forever-everlasting-life/" },
    { category: "Life and Death - Life", question: "What Is the Soul?", url: "/en/bible-teachings/questions/what-is-a-soul/" },
    { category: "Life and Death - Life", question: "Whose Names Are Written in “the Book of Life”?", url: "/en/bible-teachings/questions/book-of-life/" },

    { category: "Life and Death - Death", question: "Why Do People Die?", url: "/en/bible-teachings/questions/why-do-people-die/" },
    { category: "Life and Death - Death", question: "What Happens When You Die?", url: "/en/bible-teachings/questions/when-you-die/" },
    { category: "Life and Death - Death", question: "What Does the Bible Say About Cremation?", url: "/en/bible-teachings/questions/bible-about-cremation/" },
    { category: "Life and Death - Death", question: "How Can the Bible Help Those With Suicidal Thoughts?", url: "/en/bible-teachings/questions/suicidal-thoughts-want-to-die/" },
    { category: "Life and Death - Death", question: "Fear of Death — How Can You Overcome It?", url: "/en/bible-teachings/questions/fear-of-death/" },
    { category: "Life and Death - Death", question: "Near-Death Experiences — What Do They Not Mean?", url: "/en/bible-teachings/questions/near-death-experiences/" },
    { category: "Life and Death - Death", question: "Is Our Time to Die Predetermined?", url: "/en/bible-teachings/questions/time-to-die/" },
    { category: "Life and Death - Death", question: "What Does the Bible Say About Euthanasia?", url: "/en/bible-teachings/questions/euthanasia/" },

    { category: "Life and Death - Heaven and Hell", question: "What Is Heaven?", url: "/en/bible-teachings/questions/what-is-heaven/" },
    { category: "Life and Death - Heaven and Hell", question: "Who Go to Heaven?", url: "/en/bible-teachings/questions/go-to-heaven/" },
    { category: "Life and Death - Heaven and Hell", question: "Is Hell Real? What Is Hell According to the Bible?", url: "/en/bible-teachings/questions/is-hell-real/" },
    { category: "Life and Death - Heaven and Hell", question: "Who Goes to Hell?", url: "/en/bible-teachings/questions/who-goes-to-hell/" },
    { category: "Life and Death - Heaven and Hell", question: "What Is the Lake of Fire? Is It the Same as Hell or Gehenna?", url: "/en/bible-teachings/questions/lake-of-fire/" },
    { category: "Life and Death - Heaven and Hell", question: "Who Were the Rich Man and Lazarus?", url: "/en/bible-teachings/questions/rich-man-and-lazarus/" },
    { category: "Life and Death - Heaven and Hell", question: "Is Purgatory Mentioned in the Bible?", url: "/en/bible-teachings/questions/is-purgatory-in-the-bible/" },
    { category: "Life and Death - Heaven and Hell", question: "Do Animals Go to Heaven?", url: "/en/bible-teachings/questions/do-animals-go-to-heaven/" },

    { category: "Life and Death - Hope for the Dead", question: "What Is the Resurrection?", url: "/en/bible-teachings/questions/what-is-the-resurrection/" },
    { category: "Life and Death - Hope for the Dead", question: "Does the Bible Teach Reincarnation?", url: "/en/bible-teachings/questions/reincarnation-in-the-bible/" },

    // Suffering
    { category: "Suffering - Why So Much Suffering?", question: "Is God to Blame for Our Suffering?", url: "/en/bible-teachings/questions/our-suffering/" },
    { category: "Suffering - Why So Much Suffering?", question: "Is the Devil the Cause of All Suffering?", url: "/en/bible-teachings/questions/cause-of-suffering/" },
    { category: "Suffering - Why So Much Suffering?", question: "What Does the Bible Say About Natural Disasters?", url: "/en/bible-teachings/questions/natural-disasters-bible/" },
    { category: "Suffering - Why So Much Suffering?", question: "What Does the Bible Say About Pandemics?", url: "/en/bible-teachings/questions/bible-about-pandemics-disease/" },
    { category: "Suffering - Why So Much Suffering?", question: "Why Did God Allow the Holocaust to Happen?", url: "/en/bible-teachings/questions/why-did-the-holocaust-happen/" },
    { category: "Suffering - Why So Much Suffering?", question: "World Peace—Why So Elusive?", url: "/en/bible-teachings/questions/world-peace-elusive/" },

    { category: "Suffering - Coping With Suffering", question: "You Can Find Words of Comfort in the Bible", url: "/en/bible-teachings/questions/words-of-comfort-in-bible-verses/" },
    { category: "Suffering - Coping With Suffering", question: "Can the Bible Help Me if I’m Depressed?", url: "/en/bible-teachings/questions/bible-help-depressed/" },
    { category: "Suffering - Coping With Suffering", question: "How Can the Bible Help Those With Suicidal Thoughts?", url: "/en/bible-teachings/questions/suicidal-thoughts-want-to-die/" },
    { category: "Suffering - Coping With Suffering", question: "Living With Chronic Illness—Can the Bible Help?", url: "/en/bible-teachings/questions/living-with-chronic-illness/" },
    { category: "Suffering - Coping With Suffering", question: "What Does the Bible Say About Euthanasia?", url: "/en/bible-teachings/questions/euthanasia/" },

    { category: "Suffering - An End to Suffering", question: "What Will God’s Kingdom Accomplish?", url: "/en/bible-teachings/questions/what-gods-kingdom-will-do/" },
    { category: "Suffering - An End to Suffering", question: "Peace on Earth — How Will It Come?", url: "/en/bible-teachings/questions/peace-on-earth-how/" },
    { category: "Suffering - An End to Suffering", question: "Where Can I Find Hope?", url: "/en/bible-teachings/questions/hope-bible-verses/" },

    // Faith and Worship
    { category: "Faith and Worship - Religion", question: "What Is Spirituality? Can I Be Spiritual Without Religion?", url: "/en/bible-teachings/questions/what-is-spiritual-person/" },
    { category: "Faith and Worship - Religion", question: "Are All Religions the Same? Do They All Lead to God?", url: "/en/bible-teachings/questions/are-all-religions-the-same/" },
    { category: "Faith and Worship - Religion", question: "Is It Necessary to Belong to an Organized Religion?", url: "/en/bible-teachings/questions/organized-religion/" },
    { category: "Faith and Worship - Religion", question: "Why Are There So Many Christian Denominations?", url: "/en/bible-teachings/questions/christian-denominations/" },
    { category: "Faith and Worship - Religion", question: "How Can You Find the True Religion?", url: "/en/bible-teachings/questions/what-is-the-true-religion/" },
    { category: "Faith and Worship - Religion", question: "Who Is the Antichrist?", url: "/en/bible-teachings/questions/antichrist/" },
    { category: "Faith and Worship - Religion", question: "What Does It Mean to Be Holy?", url: "/en/bible-teachings/questions/what-does-holy-mean/" },

    { category: "Faith and Worship - Prayer", question: "Will God Help Me if I Pray?", url: "/en/bible-teachings/questions/will-god-help-me-if-i-pray/" },
    { category: "Faith and Worship - Prayer", question: "Why Pray? Will God Answer Me?", url: "/en/bible-teachings/questions/why-pray/" },
    { category: "Faith and Worship - Prayer", question: "How to Pray — Is the Lord’s Prayer the Best Way?", url: "/en/bible-teachings/questions/how-to-pray-lords-prayer-model/" },
    { category: "Faith and Worship - Prayer", question: "What Can I Pray For?", url: "/en/bible-teachings/questions/what-can-i-pray-for/" },
    { category: "Faith and Worship - Prayer", question: "Why Pray in Jesus’ Name?", url: "/en/bible-teachings/questions/pray-in-jesus-name/" },
    { category: "Faith and Worship - Prayer", question: "Should I Pray to Saints?", url: "/en/bible-teachings/questions/should-i-pray-to-saints/" },
    { category: "Faith and Worship - Prayer", question: "Why Does God Reject Some Prayers?", url: "/en/bible-teachings/questions/when-god-does-not-listen/" },

    { category: "Faith and Worship - Salvation", question: "Is Belief in Jesus Enough for Salvation?", url: "/en/bible-teachings/questions/believe-in-jesus-salvation-sinners-prayer/" },
    { category: "Faith and Worship - Salvation", question: "What Is Salvation?", url: "/en/bible-teachings/questions/what-is-salvation/" },
    { category: "Faith and Worship - Salvation", question: "Jesus Saves — How?", url: "/en/bible-teachings/questions/jesus-saves/" },
    { category: "Faith and Worship - Salvation", question: "Why Did Jesus Die?", url: "/en/bible-teachings/questions/why-did-jesus-die/" },
    { category: "Faith and Worship - Salvation", question: "How Is Jesus’ Sacrifice “a Ransom for Many”?", url: "/en/bible-teachings/questions/jesus-sacrifice-ransom/" },
    { category: "Faith and Worship - Salvation", question: "What Is Baptism?", url: "/en/bible-teachings/questions/what-is-baptism/" },
    { category: "Faith and Worship - Salvation", question: "Does the Bible Teach ‘Once Saved, Always Saved’?", url: "/en/bible-teachings/questions/once-saved-always-saved/" },
    { category: "Faith and Worship - Salvation", question: "What Does It Mean to Be Born Again?", url: "/en/bible-teachings/questions/what-does-it-mean-to-be-born-again/" },

    { category: "Faith and Worship - Sin and Forgiveness", question: "What Was the Original Sin?", url: "/en/bible-teachings/questions/original-sin/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Is Sin?", url: "/en/bible-teachings/questions/what-is-sin/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Is Forgiveness?", url: "/en/bible-teachings/questions/what-is-forgiveness/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Will God Forgive Me?", url: "/en/bible-teachings/questions/god-forgive-me/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Can the Bible Help if I Feel Guilty?", url: "/en/bible-teachings/questions/feeling-guilty/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Are There “Seven Deadly Sins”?", url: "/en/bible-teachings/questions/seven-deadly-sins/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Is the Unforgivable Sin?", url: "/en/bible-teachings/questions/unforgivable-sin/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Does “an Eye for an Eye” Mean?", url: "/en/bible-teachings/questions/eye-for-an-eye/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Does the Bible Say About Alcohol? Is Drinking It a Sin?", url: "/en/bible-teachings/questions/is-drinking-a-sin/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Is Smoking a Sin?", url: "/en/bible-teachings/questions/smoking-sin/" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Is Gambling a Sin?", url: "/en/bible-teachings/questions/is-gambling-a-sin/" },

    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Say About Tithing?", url: "/en/bible-teachings/questions/tithing-in-the-bible/" },
    { category: "Faith and Worship - Religious Practices", question: "Should We Worship Images?", url: "/en/bible-teachings/questions/should-we-worship-images/" },
    { category: "Faith and Worship - Religious Practices", question: "Should Christians Keep the Sabbath?", url: "/en/bible-teachings/questions/christian-sabbath/" },
    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Teach About Speaking in Tongues?", url: "/en/bible-teachings/questions/speaking-in-tongues/" },
    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Say About Fasting?", url: "/en/bible-teachings/questions/bible-fasting-christian/" },
    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Say About Giving?", url: "/en/bible-teachings/questions/giving-in-the-bible/" },
    { category: "Faith and Worship - Religious Practices", question: "What Are the Ten Commandments of God?", url: "/en/bible-teachings/questions/10-commandments/" },

    // Holidays and Celebrations
    { category: "Holidays and Celebrations", question: "What Does the Bible Say About Christmas?", url: "/en/bible-teachings/questions/bible-about-christmas/" },
    { category: "Holidays and Celebrations", question: "When Was Jesus Born?", url: "/en/bible-teachings/questions/when-was-jesus-born/" },
    { category: "Holidays and Celebrations", question: "What Does the Bible Say About Easter?", url: "/en/bible-teachings/questions/bible-about-easter/" },
    { category: "Holidays and Celebrations", question: "What Are the Origins of Halloween?", url: "/en/bible-teachings/questions/halloween-origin/" },
    { category: "Holidays and Celebrations", question: "What Is the Passover?", url: "/en/bible-teachings/questions/what-is-passover/" },

    // Lifestyle & Morals
    { category: "Lifestyle and Morals - Marriage and Family", question: "Can the Bible Help Me to Have a Happy Family?", url: "/en/bible-teachings/questions/happy-family/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Marriage?", url: "/en/bible-teachings/questions/marriage-in-the-bible/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Living Together Without Marriage?", url: "/en/bible-teachings/questions/live-together-without-marriage/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "Does the Bible Comment on Same-Sex Marriages?", url: "/en/bible-teachings/questions/same-sex-marriage-bible-view/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "Does the Bible Permit Divorce?", url: "/en/bible-teachings/questions/divorce-bible-view/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "Is Polygamy Acceptable?", url: "/en/bible-teachings/questions/polygamy-bible-view/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Interracial Marriage?", url: "/en/bible-teachings/questions/interracial-marriage/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does It Mean to ‘Honor Your Father and Mother’?", url: "/en/bible-teachings/questions/honor-your-father-and-mother/" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Caregiving for Elderly Parents?", url: "/en/bible-teachings/questions/elderly-caregiver-help/" },

    { category: "Lifestyle and Morals - Sex", question: "What Does the Bible Say About Homosexuality?", url: "/en/bible-teachings/questions/bible-about-homosexuality/" },
    { category: "Lifestyle and Morals - Sex", question: "What Does the Bible Say About Pornography and Cybersex?", url: "/en/bible-teachings/questions/what-does-the-bible-say-about-pornography/" },
    { category: "Lifestyle and Morals - Sex", question: "Does the Bible Prohibit Sexual Pleasure?", url: "/en/bible-teachings/questions/bible-about-sex/" },
    { category: "Lifestyle and Morals - Sex", question: "Should Christians Use Birth Control?", url: "/en/bible-teachings/questions/contraceptives-bible-view/" },
    { category: "Lifestyle and Morals - Sex", question: "How Can I Protect Myself From Sexual Harassment?", url: "/en/bible-teachings/questions/sexual-harassment/" },
    { category: "Lifestyle and Morals - Sex", question: "How Can Parents Teach Their Children About Sex?", url: "/en/bible-teachings/questions/parents-teach-children-about-sex/" },

    { category: "Lifestyle and Morals - Choices", question: "Can a Christian Accept Medical Treatment?", url: "/en/bible-teachings/questions/christian-medical-treatment/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Blood Transfusions?", url: "/en/bible-teachings/questions/bible-about-blood-transfusion/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Abortion?", url: "/en/bible-teachings/questions/abortion-in-the-bible/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Tattoos?", url: "/en/bible-teachings/questions/bible-say-about-tattoos/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Wearing Makeup and Jewelry?", url: "/en/bible-teachings/questions/makeup-jewelry/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Alcohol? Is Drinking It a Sin?", url: "/en/bible-teachings/questions/is-drinking-a-sin/" },
    { category: "Lifestyle and Morals - Choices", question: "Is Smoking a Sin?", url: "/en/bible-teachings/questions/smoking-sin/" },
    { category: "Lifestyle and Morals - Choices", question: "Is Gambling a Sin?", url: "/en/bible-teachings/questions/is-gambling-a-sin/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Free Will? Is God in Control?", url: "/en/bible-teachings/questions/free-will-in-the-bible/" },
    { category: "Lifestyle and Morals - Choices", question: "How Can I Make Good Decisions?", url: "/en/bible-teachings/questions/good-decisions-bible-verses/" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Giving?", url: "/en/bible-teachings/questions/giving-in-the-bible/" },

    // FAQ Jehovah's Witnesses
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "How Many of Jehovah’s Witnesses Are There Worldwide?", url: "/en/jehovahs-witnesses/faq/how-many-jw/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "How Many of Jehovah’s Witnesses Are There Worldwide?", url: "/en/jehovahs-witnesses/faq/how-many-jw/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "How Do Jehovah’s Witnesses View Education?", url: "/en/jehovahs-witnesses/faq/jw-education-school/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Have Their Own Bible?", url: "/en/jehovahs-witnesses/faq/jw-bible-nwt/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "What Do Jehovah’s Witnesses Believe?", url: "/en/jehovahs-witnesses/faq/jehovah-witness-beliefs/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Believe in Jesus?", url: "/en/jehovahs-witnesses/faq/believe-in-jesus/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Believe That They Have the One True Religion?", url: "/en/jehovahs-witnesses/faq/true-religion/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Feel That They Are the Only People Who Will Be Saved?", url: "/en/jehovahs-witnesses/faq/who-saved/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Are Jehovah’s Witnesses Tolerant of Other Religions?", url: "/en/jehovahs-witnesses/faq/tolerant-of-other-religions/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Why Don’t Jehovah’s Witnesses Accept Blood Transfusions?", url: "/en/jehovahs-witnesses/faq/jehovahs-witnesses-why-no-blood-transfusions/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Are Jehovah’s Witnesses Opposed to Vaccination?", url: "/en/jehovahs-witnesses/faq/jw-vaccines-immunization/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Believe in Creationism?", url: "/en/jehovahs-witnesses/faq/creationism-belief/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "How Do Jehovah’s Witnesses View Science?", url: "/en/jehovahs-witnesses/faq/view-of-science/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Believe in the Old Testament?", url: "/en/jehovahs-witnesses/faq/belief-in-old-and-new-testaments/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Have Jehovah’s Witnesses Changed the Bible to Fit Their Beliefs?", url: "/en/jehovahs-witnesses/faq/changed-bible-beliefs/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Why Have Jehovah’s Witnesses Changed Some of Their Beliefs?", url: "/en/jehovahs-witnesses/faq/jw-doctrine-changes/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Why Don’t Jehovah’s Witnesses Use the Cross in Worship?", url: "/en/jehovahs-witnesses/faq/cross-belief/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Beliefs", question: "Do Jehovah’s Witnesses Practice Interfaith?", url: "/en/jehovahs-witnesses/faq/interfaith/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "How Do Jehovah’s Witnesses Use Donations?", url: "/en/jehovahs-witnesses/faq/how-do-jw-use-donations/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "Why Use the Name Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/name-jehovahs-witnesses/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "How Many of Jehovah’s Witnesses Are There Worldwide?", url: "/en/jehovahs-witnesses/faq/how-many-jw/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "Who Was the Founder of Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/founder/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "How Is the Work of Jehovah’s Witnesses Financed?", url: "/en/jehovahs-witnesses/faq/donations-worldwide-work-finances-money/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "Do Jehovah’s Witnesses Practice Tithing?", url: "/en/jehovahs-witnesses/faq/do-jehovahs-witnesses-tithe/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "Do Jehovah’s Witnesses Have a Paid Clergy?", url: "/en/jehovahs-witnesses/faq/no-paid-clergy/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "Do Jehovah’s Witnesses Have Women UNION Preachers?", url: "/en/jehovahs-witnesses/faq/women-ministers/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "How Are Jehovah’s Witnesses’ Congregations Organized?", url: "/en/jehovahs-witnesses/faq/congregations-organized/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "What Is the Governing Body of Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/governing-body-jw-helpers/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "What Is the Watch Tower Bible and Tract Society?", url: "/en/jehovahs-witnesses/faq/watchtower-society/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Organization", question: "Why Don’t Jehovah’s Witnesses Respond to All Accusations Made Against Them?", url: "/en/jehovahs-witnesses/faq/respond-to-accusations/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Why Do Jehovah’s Witnesses Go From Door to Door?", url: "/en/jehovahs-witnesses/faq/door-to-door/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "How Are Jehovah’s Witnesses Trained for Their Personal Ministry?", url: "/en/jehovahs-witnesses/faq/jw-training-for-personal-ministry/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Are Jehovah’s Witnesses Trying to Earn Salvation by Their Door-to-Door Ministry?", url: "/en/jehovahs-witnesses/faq/salvation-and-door-to-door-ministry/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Why Do Jehovah’s Witnesses Call On People Who Already Have a Religion?", url: "/en/jehovahs-witnesses/faq/own-religion/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Why Do Jehovah’s Witnesses Speak With People Who Have Previously Said “I’m Not Interested”?", url: "/en/jehovahs-witnesses/faq/not-interested/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Do Jehovah’s Witnesses Pressure People to Change Religions?", url: "/en/jehovahs-witnesses/faq/change-religion/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "What Is the Bible Study Course Offered by Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/jw-bible-study-course/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Do Jehovah’s Witnesses Do Missionary Work?", url: "/en/jehovahs-witnesses/faq/missionary-work/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Preaching", question: "Do Jehovah’s Witnesses Have Women Preachers?", url: "/en/jehovahs-witnesses/faq/women-ministers/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Meetings and Worship", question: "Why Don’t Jehovah’s Witnesses Call Their Meeting Place a Church?", url: "/en/jehovahs-witnesses/faq/jehovahs-witnesses-church-kingdom-hall/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Meetings and Worship", question: "Why Don’t Jehovah’s Witnesses Use the Cross in Worship?", url: "/en/jehovahs-witnesses/faq/cross-belief/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Meetings and Worship", question: "Why Do Jehovah’s Witnesses Observe the Lord’s Supper Differently From the Way Other Religions Do?", url: "/en/jehovahs-witnesses/faq/lords-supper/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Meetings and Worship", question: "Do Jehovah’s Witnesses Practice Interfaith?", url: "/en/jehovahs-witnesses/faq/interfaith/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - View of the Bible", question: "Do Jehovah’s Witnesses Have Their Own Bible?", url: "/en/jehovahs-witnesses/faq/jw-bible-nwt/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - View of the Bible", question: "Is the New World Translation Accurate?", url: "/en/jehovahs-witnesses/faq/new-world-translation-accurate/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - View of the Bible", question: "Have Jehovah’s Witnesses Changed the Bible to Fit Their Beliefs?", url: "/en/jehovahs-witnesses/faq/changed-bible-beliefs/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - View of the Bible", question: "Do Jehovah’s Witnesses Believe in the Old Testament?", url: "/en/jehovahs-witnesses/faq/belief-in-old-and-new-testaments/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Community and Political Involvement", question: "Why Do Jehovah’s Witnesses Maintain Political Neutrality?", url: "/en/jehovahs-witnesses/faq/political-neutrality/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Community and Political Involvement", question: "Why Do Jehovah’s Witnesses Respectfully Abstain From Participating in Nationalistic Ceremonies?", url: "/en/jehovahs-witnesses/faq/why-abstain-nationalistic-ceremonies-flag/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Community and Political Involvement", question: "What Happened to Jehovah’s Witnesses During the Time of the Holocaust?", url: "/en/jehovahs-witnesses/faq/jw-holocaust-facts-concentration-camps/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Community and Political Involvement", question: "Why Don’t Jehovah’s Witnesses Go to War?", url: "/en/jehovahs-witnesses/faq/why-dont-jw-go-to-war/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Community and Political Involvement", question: "Do Jehovah’s Witnesses Assist With Disaster Relief?", url: "/en/jehovahs-witnesses/faq/assist-with-disaster-relief/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Do Jehovah’s Witnesses Accept Medical Treatment?", url: "/en/jehovahs-witnesses/faq/jehovahs-witnesses-medical-treatment/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Are Jehovah’s Witnesses Opposed to Vaccination?", url: "/en/jehovahs-witnesses/faq/jw-vaccines-immunization/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Why Don’t Jehovah’s Witnesses Accept Blood Transfusions?", url: "/en/jehovahs-witnesses/faq/jehovahs-witnesses-why-no-blood-transfusions/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "How Do Jehovah’s Witnesses View Education?", url: "/en/jehovahs-witnesses/faq/jw-education-school/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Do Jehovah’s Witnesses Force Their Children to Adopt Their Faith?", url: "/en/jehovahs-witnesses/faq/jw-children-accept-faith-preach/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Do Jehovah’s Witnesses Break Up Families or Build Them Up?", url: "/en/jehovahs-witnesses/faq/families/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Do Jehovah’s Witnesses Have Rules About Dating?", url: "/en/jehovahs-witnesses/faq/jw-dating/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "How Do Jehovah’s Witnesses View Divorce?", url: "/en/jehovahs-witnesses/faq/divorce-jw-view/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Personal and Family Life", question: "Do Jehovah’s Witnesses Ban Certain Movies, Books, or Songs?", url: "/en/jehovahs-witnesses/faq/do-jehovahs-witnesses-ban-certain-entertainment/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "Why Don’t Jehovah’s Witnesses Celebrate Certain Holidays?", url: "/en/jehovahs-witnesses/faq/jw-celebrate-holidays/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "Why Don’t Jehovah’s Witnesses Celebrate Christmas?", url: "/en/jehovahs-witnesses/faq/why-not-celebrate-christmas/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "Why Don’t Jehovah’s Witnesses Celebrate Easter?", url: "/en/jehovahs-witnesses/faq/why-not-celebrate-easter/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "Why Don’t Jehovah’s Witnesses Celebrate Birthdays?", url: "/en/jehovahs-witnesses/faq/birthdays/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "What Happens at a Wedding of Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/jw-weddings/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "Why Do Jehovah’s Witnesses Observe the Lord’s Supper Differently From the Way Other Religions Do?", url: "/en/jehovahs-witnesses/faq/lords-supper/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Customs and Celebrations", question: "How Do Jehovah’s Witnesses View Funerals?", url: "/en/jehovahs-witnesses/faq/funeral/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Who Are Jehovah's Witnesses?", question: "Are Jehovah’s Witnesses Christians?", url: "/en/jehovahs-witnesses/faq/are-jehovahs-witnesses-christians/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Who Are Jehovah's Witnesses?", question: "Are Jehovah’s Witnesses Protestants?", url: "/en/jehovahs-witnesses/faq/are-jehovahs-witnesses-protestants/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Who Are Jehovah's Witnesses?", question: "Are Jehovah’s Witnesses an American Sect?", url: "/en/jehovahs-witnesses/faq/not-a-sect/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Who Are Jehovah's Witnesses?", question: "Are Jehovah’s Witnesses Zionists?", url: "/en/jehovahs-witnesses/faq/beliefs-about-zionism/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Who Are Jehovah's Witnesses?", question: "Are Jehovah’s Witnesses a Cult?", url: "/en/jehovahs-witnesses/faq/are-jehovahs-witnesses-a-cult/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Who Are Jehovah's Witnesses?", question: "How Many of Jehovah’s Witnesses Are There Worldwide?", url: "/en/jehovahs-witnesses/faq/how-many-jw/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Becoming a Witness", question: "How Do I Become One of Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/how-to-become-jehovahs-witness/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Becoming a Witness", question: "Am I Expected to Become One of Jehovah’s Witnesses if I Study the Bible With Them?", url: "/en/jehovahs-witnesses/faq/no-obligation-study/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Becoming a Witness", question: "How Are Jehovah’s Witnesses Trained for Their Personal Ministry?", url: "/en/jehovahs-witnesses/faq/jw-training-for-personal-ministry/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Becoming a Witness", question: "Can a Person Resign From Being One of Jehovah’s Witnesses?", url: "/en/jehovahs-witnesses/faq/resign/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Becoming a Witness", question: "Do Jehovah’s Witnesses Shun Those Who Used to Belong to Their Religion?", url: "/en/jehovahs-witnesses/faq/shunning/" },
    { category: "Frequently Asked Questions About Jehovah’s Witnesses - Becoming a Witness", question: "Frequently Asked Questions About Jehovah’s Witnesses", url: "/en/jehovahs-witnesses/faq/" }
  ];

  private usedQuestions: number[] = [];
  private currentQuestionIndex = -1;

  // Observables for components to subscribe to
  private currentQuestionSubject = new BehaviorSubject<Question | null>(null);
  currentQuestion$ = this.currentQuestionSubject.asObservable();

  private animationStateSubject = new BehaviorSubject<'active' | 'exit' | 'none'>('none');
  animationState$ = this.animationStateSubject.asObservable();

  private progressSubject = new BehaviorSubject<number>(0);
  progress$ = this.progressSubject.asObservable();

  constructor() {
    // Initialize with welcome message
    this.currentQuestionSubject.next({
      category: 'General Knowledge',
      question: 'Click "Next Question" to start your practice session!'
    });

    // Initialize with active class after a short delay
    setTimeout(() => {
      this.animationStateSubject.next('active');
    }, 300);
  }

  getNextQuestion(): void {
    // Start exit animation
    this.animationStateSubject.next('exit');

    setTimeout(() => {
      // Get new question
      this.currentQuestionIndex = this.getRandomQuestionIndex();
      const questionData = this.questionsDB[this.currentQuestionIndex];

      // Update current question
      this.currentQuestionSubject.next(questionData);

      // Reset animation state
      this.animationStateSubject.next('none');

      // Force reflow to restart animation by setting to none first
      setTimeout(() => {
        this.animationStateSubject.next('active');
      }, 10);

      // Update progress
      this.updateProgress();
    }, 500);
  }

  private getRandomQuestionIndex(): number {
    // Reset used questions if we've gone through most of them
    if (this.usedQuestions.length >= this.questionsDB.length * 0.7) {
      this.usedQuestions = [];
    }

    // Filter out used questions
    const availableIndices = Array.from(
      { length: this.questionsDB.length },
      (_, i) => i
    ).filter(index => !this.usedQuestions.includes(index));

    // If somehow all questions are used, just pick a random one
    if (availableIndices.length === 0) {
      return Math.floor(Math.random() * this.questionsDB.length);
    }

    // Get random index from available questions
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    const questionIndex = availableIndices[randomIndex];

    this.usedQuestions.push(questionIndex);
    return questionIndex;
  }

  private updateProgress(): void {
    const progress = (this.usedQuestions.length / this.questionsDB.length) * 100;
    this.progressSubject.next(progress);
  }
}
