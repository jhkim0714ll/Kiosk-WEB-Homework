import { executeSelect } from "../model/db";
import { getUserByIdAndPassword } from "../model/repository/user";

export const loginPage = (req, res) => {
  res.render("login");
};

export const login = (req, res) => {
  const { body } = req.body;

  const user = executeSelect(getUserByIdAndPassword(body.id, body.password));

  if (user == null || user == undefined) {
    return res.status(404).json({
      status: 404,
      message: "아이디 또는 비밀번호가 틀렸습니다",
    });
  }

  const token = "ejsfnosfniojsfkjbijoij.isuhefoijsfhoisfbsi.fiisuehfbsu";

  return res.status(200).json({
    status: 201,
    message: "로그인 성공",
    data: { user, token },
  });
};

export const logout = (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "로그아웃 성공",
  });
};
