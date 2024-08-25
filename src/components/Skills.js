import React from "react";
import { Flex, Progress } from "antd";
import { green } from "@ant-design/colors";
import "./css/Skills.css";

export const Skills = ({ isDarkTheme }) => {
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div
        className="skills"
        id="skills"
        style={{
          marginRight: 0,
        }}
      >
        <div className="col-lg-12 heading">
          <h2>Skills</h2>
          <p>Proficiencies and technical expertise</p>
        </div>

        <div className="categories">
          <div className="containers">
            <i className="devicon-javascript-plain  "></i>
            Javascript
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-nextjs-original"></i>
            Next.js
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-react-original"></i>
            ReactJs
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-typescript-plain"></i>
            TypeScript
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-react-original-wordmark  "></i>
            React Native
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-django-plain  "></i>
            Django
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-express-original  "></i>
            Express
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-nodejs-plain-wordmark  "></i>
            Nodejs
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-python-plain  "></i>
            Python
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-mysql-plain  "></i>
            My SQL
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-mongodb-plain  "></i>
            MongoDB
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-tensorflow-original  "></i>
            TensorFlow
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-docker-plain  "></i>
            Docker
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-git-plain  "></i>
            Git
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>

          <div className="containers">
            <i className="devicon-react-original"></i>
            ReactJs
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-googlecloud-plain"></i>
            Google Cloud
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-kubernetes-plain"></i>
            Kubernetes
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-googleplay"></i>
            Google Play Console
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-apple-original"></i>
            Apple Developer
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-postgresql-plain"></i>
            PostgreSQL
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-gitlab-plain"></i>
            GitLab
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#88FFC6"
              />
            </Flex>
          </div>
          <div className="containers">
            <i className="devicon-github-original"></i>
            GitHub
            <Flex gap="small" vertical>
              <Progress
                percent={100}
                steps={5}
                size="small"
                strokeColor="#181717"
              />
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};
