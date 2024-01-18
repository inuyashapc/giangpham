const tutorial = [
  {
    id: 1,
    title: "Digital Transformation - Chuyển Đổi Số",
    author: "Lindsay Herbert",
    images: [
      { id: 1, url: "/1.png", caption: "Digital Transformation" },
      { id: 2, url: "/2.png", caption: "Digital Transformation 1" },
      { id: 3, url: "/3.png", caption: "Digital Transformation 2" },
    ],
    comments: [1, 2, 3],
    category: 1,
  },
  {
    id: 2,
    title: "Big Data - Dữ Liệu Lớn",
    author: "Lars Rinnan",
    images: [
      { id: 4, url: "/4.png", caption: "Big Data" },
      { id: 5, url: "/5.png", caption: "Big Data 1" },
      { id: 6, url: "/6.png", caption: "Big Data 2" },
    ],
    comments: [4, 5, 6, 7],
    category: 2,
  },
  {
    id: 3,
    title: "Cuộc Cách Mạng Blockchain",
    author: "Don & Alex Tapscott",
    images: [
      { id: 7, url: "/7.png", caption: "Cuộc Cách Mạng Blockchain" },
      { id: 8, url: "/8.png", caption: "Cuộc Cách Mạng Blockchain 1" },
      { id: 9, url: "/9.png", caption: "Cuộc Cách Mạng Blockchain 2" },
    ],
    comments: [8, 9],
    category: 1,
  },
];

const getCourseList = async (req, res) => {
  const { catid } = req.query;
  console.log("🚀 ========= catid:", catid);
  try {
    if (catid) {
      const result = tutorial.filter((item) => item.category == catid);
      console.log("🚀 ========= result:", result);
      if (result.length == 0) {
        res.status(200).json("Invalid category format");
      } else {
        res.status(200).json(result);
      }
    } else {
      res.status(200).json({
        message: "Get all tutorials",
        data: tutorial,
        total: tutorial.length,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const getCourseDetail = async (req, res) => {
  const { title } = req.params;
  console.log("🚀 ========= title:", title);
  try {
    const result = tutorial.find((item) => item.title == title);
    console.log("🚀 ========= result:", result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({ message: `${title} not found` });
    }
  } catch (error) {
    res.status(500).json({
      message: `Title: ${title} is not found`,
    });
  }
};

export default { getCourseList, getCourseDetail };
