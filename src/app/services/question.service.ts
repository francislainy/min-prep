import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsDB: Question[] = [
    // God
    { category: "God - Who Is God?", question: "Does God Exist?" },
    { category: "God - Who Is God?", question: "Is God an Impersonal Force?" },
    { category: "God - Who Is God?", question: "Is God Everywhere, Omnipresent?" },
    { category: "God - Who Is God?", question: "Has Anyone Ever Seen God?" },
    { category: "God - Who Is God?", question: "Is the Trinity Doctrine in the Bible?" },
    { category: "God - Who Is God?", question: "Is Mary the Mother of God?" },
    { category: "God - Who Is God?", question: "Does God Change His Mind?" },
    { category: "God - Who Is God?", question: "What Is the Holy Spirit?" },

    { category: "God - God’s Name", question: "Does God Have a Name?" },
    { category: "God - God’s Name", question: "Is God’s Name Jesus?" },
    { category: "God - God’s Name", question: "Who Is Jehovah?" },
    { category: "God - God’s Name", question: "Has Anyone Ever Seen God?" },
    { category: "God - God’s Name", question: "How Many Names Does God Have?" },
    { category: "God - God’s Name", question: "Is Mary the Mother of God?" },
    { category: "God - God’s Name", question: "Does God Change His Mind?" },
    { category: "God - God’s Name", question: "What Is the Holy Spirit?" },

    { category: "God - God’s Will", question: "What Is the Will of God for My Life?" },
    { category: "God - God’s Will", question: "What Does the Bible Say About Free Will? Is God in Control?" },
    { category: "God - God’s Will", question: "How Can You Know God Personally?" },
    { category: "God - God’s Will", question: "Is God to Blame for Our Suffering?" },

    // The Bible
    { category: "The Bible - Origin and Authenticity", question: "What Is the Bible?" },
    { category: "The Bible - Origin and Authenticity", question: "Is the Bible a Book of Human Wisdom?" },
    { category: "The Bible - Origin and Authenticity", question: "Is the Bible a Record of God’s Thoughts?" },
    { category: "The Bible - Origin and Authenticity", question: "Did Moses Write the Bible?" },
    { category: "The Bible - Origin and Authenticity", question: "Can Anyone Know Who Really Wrote the Bible?" },
    { category: "The Bible - Origin and Authenticity", question: "Has the Bible Been Changed or Tampered With?" },
    { category: "The Bible - Origin and Authenticity", question: "When Did God Begin to Create the Universe?" },
    { category: "The Bible - Origin and Authenticity", question: "Does Science Agree With the Bible?" },
    { category: "The Bible - Origin and Authenticity", question: "Does the Bible Teach That the Earth Is Flat?" },
    { category: "The Bible - Origin and Authenticity", question: "Is the Bible a White Man’s Book?" },
    { category: "The Bible - Origin and Authenticity", question: "When Were the Accounts About Jesus Written?" },

    { category: "The Bible - Reading and Understanding the Bible", question: "What Are the Keys to Understanding the Bible?" },
    { category: "The Bible - Reading and Understanding the Bible", question: "Are There Contradictions in the Bible?" },
    { category: "The Bible - Reading and Understanding the Bible", question: "Who or What Is the Word of God?" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Does “an Eye for an Eye” Mean?" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Are the Ten Commandments of God?" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Does It Mean to Be a “Good Samaritan”?" },
    { category: "The Bible - Reading and Understanding the Bible", question: "What Is the Torah?" },

    { category: "The Bible - Prophecy and Symbolism", question: "What Is Prophecy?" },
    { category: "The Bible - Prophecy and Symbolism", question: "Do Messianic Prophecies Prove That Jesus Was the Messiah?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Do Numbers Mean in the Bible? Is Numerology Biblical?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Does Bible Chronology Indicate About the Year 1914?" },
    { category: "The Bible - Prophecy and Symbolism", question: "The Book of Revelation — What Does It Mean?" },
    { category: "The Bible - Prophecy and Symbolism", question: "Who or What Is “the Alpha and the Omega”?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is New Jerusalem?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is the Seven-Headed Wild Beast of Revelation Chapter 13?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is the Scarlet-Colored Beast of Revelation Chapter 17?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Does 666 Mean?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is Babylon the Great?" },
    { category: "The Bible - Prophecy and Symbolism", question: "What Is the Lake of Fire? Is It the Same as Hell or Gehenna?" },
    { category: "The Bible - Prophecy and Symbolism", question: "Who Were the Rich Man and Lazarus?" },

    { category: "The Bible - End of the World", question: "What Is the Sign of “the Last Days,” or “End Times”?" },
    { category: "The Bible - End of the World", question: "Did the Bible Predict the Way People Think and Act Today?" },
    { category: "The Bible - End of the World", question: "What Is the Great Tribulation?" },
    { category: "The Bible - End of the World", question: "What Is the Battle of Armageddon?" },
    { category: "The Bible - End of the World", question: "Will the Earth Be Destroyed?" },
    { category: "The Bible - End of the World", question: "When Will the World End?" },
    { category: "The Bible - End of the World", question: "What Will God’s Kingdom Accomplish?" },
    { category: "The Bible - End of the World", question: "Peace on Earth—How Will It Come?" },

    { category: "The Bible - People, Places, and Things", question: "Women in the Bible — What Can We Learn From Them?" },
    { category: "The Bible - People, Places, and Things", question: "Is Mary the Mother of God?" },
    { category: "The Bible - People, Places, and Things", question: "The Virgin Mary — What Does the Bible Say About Her?" },
    { category: "The Bible - People, Places, and Things", question: "Who Was John the Baptist?" },
    { category: "The Bible - People, Places, and Things", question: "Who Was Mary Magdalene?" },
    { category: "The Bible - People, Places, and Things", question: "What Does the Bible Say About Daniel?" },
    { category: "The Bible - People, Places, and Things", question: "Who Was Cain’s Wife?" },
    { category: "The Bible - People, Places, and Things", question: "The Story of Noah and the Great Flood — Is It Just a Myth?" },
    { category: "The Bible - People, Places, and Things", question: "What Is the Ark of the Covenant?" },
    { category: "The Bible - People, Places, and Things", question: "Is the Shroud of Turin the Burial Cloth of Jesus?" },
    { category: "The Bible - People, Places, and Things", question: "What Does the Bible Say About Dinosaurs?" },

    { category: "The Bible - Practical Value", question: "Can the Bible Help Me to Have a Happy Family?" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Friendship?" },
    { category: "The Bible - Practical Value", question: "What Is the Golden Rule?" },
    { category: "The Bible - Practical Value", question: "What Does It Mean to “Love Your Enemies”?" },
    { category: "The Bible - Practical Value", question: "How Can I Make Good Decisions?" },
    { category: "The Bible - Practical Value", question: "Where Can I Find Hope?" },
    { category: "The Bible - Practical Value", question: "Is Money the Root of All Evil?" },
    { category: "The Bible - Practical Value", question: "Money Problems and Debt—Can the Bible Help?" },
    { category: "The Bible - Practical Value", question: "Living With Chronic Illness — Can the Bible Help?" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Revenge?" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Anger?" },
    { category: "The Bible - Practical Value", question: "Can the Bible Help Me if I’m Depressed?" },
    { category: "The Bible - Practical Value", question: "Can Religion, God, or the Bible Help You Feel Better About Your Life?" },
    { category: "The Bible - Practical Value", question: "What Does the Bible Say About Loving Yourself?" },

    // Jesus
    { category: "Jesus - Who Is Jesus?", question: "Was Jesus Just a Good Man?" },
    { category: "Jesus - Who Is Jesus?", question: "Is Jesus Almighty God?" },
    { category: "Jesus - Who Is Jesus?", question: "Why Is Jesus Called the Son of God?" },
    { category: "Jesus - Who Is Jesus?", question: "Do Messianic Prophecies Prove That Jesus Was the Messiah?" },
    { category: "Jesus - Who Is Jesus?", question: "Who Is the Antichrist?" },
    { category: "Jesus - Who Is Jesus?", question: "Who or What Is the Word of God?" },
    { category: "Jesus - Who Is Jesus?", question: "Who Is the Archangel Michael?" },

    { category: "Jesus - Jesus’ Life on Earth", question: "When Was Jesus Born?" },
    { category: "Jesus - Jesus’ Life on Earth", question: "The Virgin Mary — What Does the Bible Say About Her?" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Who Were the “Three Wise Men”? Did They Follow the “Star” of Bethlehem?" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Do Scholars Believe That Jesus Existed?" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Does the Bible Contain an Accurate Record of Jesus’ Life?" },
    { category: "Jesus - Jesus’ Life on Earth", question: "Was Jesus Married? Did Jesus Have Siblings?" },
    { category: "Jesus - Jesus’ Life on Earth", question: "When Were the Accounts About Jesus Written?" },

    { category: "Jesus - Jesus’ Death and Resurrection", question: "Why Did Jesus Die?" },
    { category: "Jesus - Jesus’ Death and Resurrection", question: "Did Jesus Die on a Cross?" },
    { category: "Jesus - Jesus’ Death and Resurrection", question: "Is the Shroud of Turin the Burial Cloth of Jesus?" },
    { category: "Jesus - Jesus’ Death and Resurrection", question: "After Jesus’ Resurrection, Was His Body Flesh or Spirit?" },

    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "Jesus Saves — How?" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "Is Belief in Jesus Enough for Salvation?" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "How Is Jesus’ Sacrifice “a Ransom for Many”?" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "Why Pray in Jesus’ Name?" },
    { category: "Jesus - Jesus’ Role in God’s Purpose", question: "What Is the Coming of Christ?" },

    // God's kingdom
    { category: "God’s Kingdom", question: "What Is the Kingdom of God?" },
    { category: "God’s Kingdom", question: "Is the Kingdom of God in Your Heart?" },
    { category: "God’s Kingdom", question: "What Will God’s Kingdom Accomplish?" },
    { category: "God’s Kingdom", question: "What Does Bible Chronology Indicate About the Year 1914?" },
    { category: "God’s Kingdom", question: "Peace on Earth—How Will It Come?" },
    { category: "God’s Kingdom", question: "What Are “the Keys of the Kingdom”?" },

    // Spirit Realm
    { category: "Spirit Realm - Heaven", question: "What Is Heaven?" },
    { category: "Spirit Realm - Heaven", question: "Who Go to Heaven?" },
    { category: "Spirit Realm - Heaven", question: "What Is New Jerusalem?" },
    { category: "Spirit Realm - Heaven", question: "Does God Live in a Specific Location?" },

    { category: "Spirit Realm - Angels", question: "Who or What Are Angels?" },
    { category: "Spirit Realm - Angels", question: "Who Is the Archangel Michael?" },

    { category: "Spirit Realm - Devil and Demons", question: "Is the Devil Real?" },
    { category: "Spirit Realm - Devil and Demons", question: "Did God Create the Devil?" },
    { category: "Spirit Realm - Devil and Demons", question: "What Does the Devil Look Like?" },
    { category: "Spirit Realm - Devil and Demons", question: "Where Does the Devil Live?" },
    { category: "Spirit Realm - Devil and Demons", question: "Can the Devil Control Humans?" },
    { category: "Spirit Realm - Devil and Demons", question: "Is the Devil the Cause of All Suffering?" },
    { category: "Spirit Realm - Devil and Demons", question: "Are Demons Real?" },
    { category: "Spirit Realm - Devil and Demons", question: "Who Were the Nephilim?" },

    // Life & Death
    { category: "Life and Death - Life", question: "What Is the Meaning of Life?" },
    { category: "Life and Death - Life", question: "What Is the Will of God for My Life?" },
    { category: "Life and Death - Life", question: "How Can You Live Forever?" },
    { category: "Life and Death - Life", question: "What Is the Soul?" },
    { category: "Life and Death - Life", question: "Whose Names Are Written in “the Book of Life”?" },

    { category: "Life and Death - Death", question: "Why Do People Die?" },
    { category: "Life and Death - Death", question: "What Happens When You Die?" },
    { category: "Life and Death - Death", question: "What Does the Bible Say About Cremation?" },
    { category: "Life and Death - Death", question: "How Can the Bible Help Those With Suicidal Thoughts?" },
    { category: "Life and Death - Death", question: "Fear of Death — How Can You Overcome It?" },
    { category: "Life and Death - Death", question: "Near-Death Experiences — What Do They Not Mean?" },
    { category: "Life and Death - Death", question: "Is Our Time to Die Predetermined?" },
    { category: "Life and Death - Death", question: "What Does the Bible Say About Euthanasia?" },

    { category: "Life and Death - Heaven and Hell", question: "What Is Heaven?" },
    { category: "Life and Death - Heaven and Hell", question: "Who Go to Heaven?" },
    { category: "Life and Death - Heaven and Hell", question: "Is Hell Real? What Is Hell According to the Bible?" },
    { category: "Life and Death - Heaven and Hell", question: "Who Goes to Hell?" },
    { category: "Life and Death - Heaven and Hell", question: "What Is the Lake of Fire? Is It the Same as Hell or Gehenna?" },
    { category: "Life and Death - Heaven and Hell", question: "Who Were the Rich Man and Lazarus?" },
    { category: "Life and Death - Heaven and Hell", question: "Is Purgatory Mentioned in the Bible?" },
    { category: "Life and Death - Heaven and Hell", question: "Do Animals Go to Heaven?" },

    { category: "Life and Death - Hope for the Dead", question: "What Is the Resurrection?" },
    { category: "Life and Death - Hope for the Dead", question: "Does the Bible Teach Reincarnation?" },

    // Suffering
    { category: "Suffering - Why So Much Suffering?", question: "Is God to Blame for Our Suffering?" },
    { category: "Suffering - Why So Much Suffering?", question: "Is the Devil the Cause of All Suffering?" },
    { category: "Suffering - Why So Much Suffering?", question: "What Does the Bible Say About Natural Disasters?" },
    { category: "Suffering - Why So Much Suffering?", question: "What Does the Bible Say About Pandemics?" },
    { category: "Suffering - Why So Much Suffering?", question: "Why Did God Allow the Holocaust to Happen?" },
    { category: "Suffering - Why So Much Suffering?", question: "World Peace—Why So Elusive?" },

    { category: "Suffering - Coping With Suffering", question: "You Can Find Words of Comfort in the Bible" },
    { category: "Suffering - Coping With Suffering", question: "Can the Bible Help Me if I’m Depressed?" },
    { category: "Suffering - Coping With Suffering", question: "How Can the Bible Help Those With Suicidal Thoughts?" },
    { category: "Suffering - Coping With Suffering", question: "Living With Chronic Illness—Can the Bible Help?" },
    { category: "Suffering - Coping With Suffering", question: "What Does the Bible Say About Euthanasia?" },

    { category: "Suffering - An End to Suffering", question: "What Will God’s Kingdom Accomplish?" },
    { category: "Suffering - An End to Suffering", question: "Peace on Earth — How Will It Come?" },
    { category: "Suffering - An End to Suffering", question: "Where Can I Find Hope?" },

    // Faith and Worship
    { category: "Faith and Worship - Religion", question: "What Is Spirituality? Can I Be Spiritual Without Religion?" },
    { category: "Faith and Worship - Religion", question: "Are All Religions the Same? Do They All Lead to God?" },
    { category: "Faith and Worship - Religion", question: "Is It Necessary to Belong to an Organized Religion?" },
    { category: "Faith and Worship - Religion", question: "Why Are There So Many Christian Denominations?" },
    { category: "Faith and Worship - Religion", question: "How Can You Find the True Religion?" },
    { category: "Faith and Worship - Religion", question: "Who Is the Antichrist?" },
    { category: "Faith and Worship - Religion", question: "What Does It Mean to Be Holy?" },

    { category: "Faith and Worship - Prayer", question: "Will God Help Me if I Pray?" },
    { category: "Faith and Worship - Prayer", question: "Why Pray? Will God Answer Me?" },
    { category: "Faith and Worship - Prayer", question: "How to Pray — Is the Lord’s Prayer the Best Way?" },
    { category: "Faith and Worship - Prayer", question: "What Can I Pray For?" },
    { category: "Faith and Worship - Prayer", question: "Why Pray in Jesus’ Name?" },
    { category: "Faith and Worship - Prayer", question: "Should I Pray to Saints?" },
    { category: "Faith and Worship - Prayer", question: "Why Does God Reject Some Prayers?" },

    { category: "Faith and Worship - Salvation", question: "Is Belief in Jesus Enough for Salvation?" },
    { category: "Faith and Worship - Salvation", question: "What Is Salvation?" },
    { category: "Faith and Worship - Salvation", question: "Jesus Saves — How?" },
    { category: "Faith and Worship - Salvation", question: "Why Did Jesus Die?" },
    { category: "Faith and Worship - Salvation", question: "How Is Jesus’ Sacrifice “a Ransom for Many”?" },
    { category: "Faith and Worship - Salvation", question: "What Is Baptism?" },
    { category: "Faith and Worship - Salvation", question: "Does the Bible Teach ‘Once Saved, Always Saved’?" },
    { category: "Faith and Worship - Salvation", question: "What Does It Mean to Be Born Again?" },

    { category: "Faith and Worship - Sin and Forgiveness", question: "What Was the Original Sin?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Is Sin?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Is Forgiveness?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Will God Forgive Me?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Can the Bible Help if I Feel Guilty?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Are There “Seven Deadly Sins”?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Is the Unforgivable Sin?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Does “an Eye for an Eye” Mean?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "What Does the Bible Say About Alcohol? Is Drinking It a Sin?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Is Smoking a Sin?" },
    { category: "Faith and Worship - Sin and Forgiveness", question: "Is Gambling a Sin?" },

    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Say About Tithing?" },
    { category: "Faith and Worship - Religious Practices", question: "Should We Worship Images?" },
    { category: "Faith and Worship - Religious Practices", question: "Should Christians Keep the Sabbath?" },
    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Teach About Speaking in Tongues?" },
    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Say About Fasting?" },
    { category: "Faith and Worship - Religious Practices", question: "What Does the Bible Say About Giving?" },
    { category: "Faith and Worship - Religious Practices", question: "What Are the Ten Commandments of God?" },

    // Holidays and Celebrations
    { category: "Holidays and Celebrations", question: "What Does the Bible Say About Christmas?" },
    { category: "Holidays and Celebrations", question: "When Was Jesus Born?" },
    { category: "Holidays and Celebrations", question: "What Does the Bible Say About Easter?" },
    { category: "Holidays and Celebrations", question: "What Are the Origins of Halloween?" },
    { category: "Holidays and Celebrations", question: "What Is the Passover?" },

    // Marriage and Family
    { category: "Lifestyle and Morals - Marriage and Family", question: "Can the Bible Help Me to Have a Happy Family?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Marriage?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Living Together Without Marriage?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "Does the Bible Comment on Same-Sex Marriages?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "Does the Bible Permit Divorce?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "Is Polygamy Acceptable?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Interracial Marriage?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does It Mean to ‘Honor Your Father and Mother’?" },
    { category: "Lifestyle and Morals - Marriage and Family", question: "What Does the Bible Say About Caregiving for Elderly Parents?" },

    { category: "Lifestyle and Morals - Sex", question: "What Does the Bible Say About Homosexuality?" },
    { category: "Lifestyle and Morals - Sex", question: "What Does the Bible Say About Pornography and Cybersex?" },
    { category: "Lifestyle and Morals - Sex", question: "Does the Bible Prohibit Sexual Pleasure?" },
    { category: "Lifestyle and Morals - Sex", question: "Should Christians Use Birth Control?" },
    { category: "Lifestyle and Morals - Sex", question: "How Can I Protect Myself From Sexual Harassment?" },
    { category: "Lifestyle and Morals - Sex", question: "How Can Parents Teach Their Children About Sex?" },

    { category: "Lifestyle and Morals - Choices", question: "Can a Christian Accept Medical Treatment?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Blood Transfusions?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Abortion?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Tattoos?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Wearing Makeup and Jewelry?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Alcohol? Is Drinking It a Sin?" },
    { category: "Lifestyle and Morals - Choices", question: "Is Smoking a Sin?" },
    { category: "Lifestyle and Morals - Choices", question: "Is Gambling a Sin?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Free Will? Is God in Control?" },
    { category: "Lifestyle and Morals - Choices", question: "How Can I Make Good Decisions?" },
    { category: "Lifestyle and Morals - Choices", question: "What Does the Bible Say About Giving?" },
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
