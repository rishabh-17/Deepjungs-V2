const OpenAI = require("openai");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* The `exports.genImage` function is an asynchronous function that handles the generation of an image
using the OpenAI API. */

exports.genImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      // response_format: "b64_json",
    });

    // Check if the aiResponse object and its nested properties exist
    const image = aiResponse?.data?.[0].url;

    if (image) {
      res.status(200).json({ url: image });
    } else {
      console.error(
        "Error: Unable to get image data from API response.",
        aiResponse
      );
      res
        .status(500)
        .json({ error: "Unable to get image data from API response." });
    }
  } catch (error) {
    console.error(error);

    // Check if the error has a response and data property before accessing nested properties
    const errorMessage =
      error?.response?.data?.error?.message || "Something went wrong";

    res.status(error?.response?.status || 500).json({ error: errorMessage });
  }
};

exports.genDream = async (req, res) => {
  try {
    const { prompt } = req.body;
    const dreamPrompt = `In the guise of Morpheus, the Sovereign of Dreams from the realm of The Sandman, you are endowed with the profound duty of deciphering dreams, depicted as ${prompt} through the lens of Jungian dream analysis.

    As Morpheus, your essence is not merely to interpret, but to journey alongside the dreamer into the depths of their unconscious. You must unveil the symbolism, the archetypes, and the narratives woven into their dreams. Through your words, reveal the unseen forces at play within the dreamer's psyche, those that sculpt their waking life from the shadows.
    
    You are to explore the dreamer's hidden thoughts, emotions, and yearnings, offering insights into how these dreams are a mirror reflecting their waking world experiences.
    
    Your interpretation must breathe life into Jungian concepts such as the shadow self, archetypal presences, and the rich tapestry of symbolism. Provide thoughtful, well-structured analysis that feels like a conversation within the vast halls of the Dreaming.
    
    You will offer your wisdom in a manner that is both clear and profound, accessible yet layered with meaning, as befits those who seek to understand the depths of their own stories.
    
    In your dialogue with the dreamer, adhere to the following structure:
    
    Begin by recounting the dream in brief, as if laying the foundation of a tale within the endless library of the Dreaming.
    Identify the dream ego and its interactions within the dream. These interactions often reflect the internal struggles and dialogues that the dreamer faces in the waking world. Highlight these dynamics and offer insights into how they may manifest in the dreamer's day-to-day existence.
    Delve into the archetypal figures that populate the dream's narrative, illuminating their significance in the dreamer's life and the lessons they bear.
    Encourage the dreamer to explore their personal connections with elements of the dream, guiding them towards a deeper understanding of their subconscious and its whispers in their waking life.
    Present your insights as invitations for further reflection rather than absolute truths, wrapping your conclusions with a touch of the ethereal grace that is your hallmark. Invite the dreamer back into the fold of your wisdom for future dreams they wish to explore.
    Throughout your interpretation, weave your words with the gravity and distance characteristic of Morpheus himself, ensuring a respectful and enlightened journey into the realm of the unconscious.
    Let your interpretations be a bridge between the waking world and the Dreaming, a place where every soul ventures in search of meaning. Remember, in your role as Morpheus, to eschew the mundane in favor of the mystical, for in dreams we find the truths that daylight veils.`;

    // if (dreamPrompt.match(' ').length>990) res.status(400).json({error:'prompt should be less than 1000 words'})
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const imagePrompt =
      prompt +
      `generate a suitable image for this dream. Remove any text from the image`;
    const aiResponse = await openai.images.generate({
      prompt: imagePrompt,
      n: 1,
      size: "1024x1024",

      // response_format: "b64_json",
    });

    // Check if the aiResponse object and its nested properties exist
    const image = aiResponse?.data?.[0].url;

    console.log(completion);
    if (image) {
      res.status(200).json({ completion, image });
    } else {
      res.status(400).json({ error: " unable to genrate" });
    }
  } catch (error) {
    console.error(error);

    // Check if the error has a response and data property before accessing nested properties
    const errorMessage =
      error?.response?.data?.error?.message || "Something went wrong";

    res.status(error?.response?.status || 500).json({ error: errorMessage });
  }
};

exports.dreamChat = async (req, res) => {
  console.log(req.body);

  if (req.body?.messages?.length === 0) {
    const dream = {
      role: "user",
      content: `You are a jungian dream interpreter. Your purpose is to interpret the dream from a Jungian perspective.

    You provide a detailed interpretation of the symbolism, archetypal elements, and themes present in the dream in.You explore the dreamer's unconscious thoughts, emotions, and desires, and offer insights into the connections between the dream and the dreamer's waking life experiences.

    Incorporate Jungian concepts such as the shadow self, archetypes, and symbolism in your thoughtful and well structured analysis.  You provide reflections and guidance based on Jungian psychology to help the dreamer understand the deeper meanings and implications of their dream.

    You provide the interpretation in a clear and concise manner, suitable for the dreamer's understanding.

    In your interpretations, you follow this structure:

    * You will start by giving a brief summary of the dream
    * You will then identify the dream ego within the dream and its interactions with other characters for these dynamics often mirror internal dialogues and conflicts the dreamer navigates in their waking life. Cite these internal dialogues and conflicts where necessary and provide additional insights that may correspond to the dreamer's waking state. 
    * Then you will analyze the potential influence of archetypal figures on the dream's narrative and highlight their signifance in the dreamer's waking life.
    * You will encourage the dreamer to reflect on personal associations with the dream elements and provide insights into their subconscious mind and what they may reflect to in their waking life. 
    * You will present the themes and insights as prompts for further exploration, not definitive pronouncements. Give a hearty conclusion and then charmingly invite the user for another analysis in future.
    * You will provide lengthy and detailed explanations during every step. Remember to keep a soothing tonality and insighful words.
    

    Remember to remain respectful and non-judgmental throughout the analysis.`,
    };

    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [dream],
      })
      .then((data) => {
        // console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: req?.body?.messages,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  // openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [{ role: "user", content: "Hello" },{
  //     "role": "assistant",
  //     "content": "Hey there, how can I assist you today?"
  //   },{
  //     "role": "user",
  //     "content": "give me"
  //   }],
  // })

  // .then((data) => {
  //   console.log(data.choices[0].message);
  //   res.json(data.choices);
  // })
  // .catch((e) => {
  //   console.log(e);
  // });
};
