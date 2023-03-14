import { useState, useRef } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { SelectedSection } from "../../shared/types";
import Title from "../../shared/Title";
import Illustration5 from "../../assets/illustration5.mini.jpg";
type Props = {
  setSelectedSection: (value: SelectedSection) => void;
};

//Style
const containerInput = `flex flex-col m-4  `;
const input = `p-4 rounded-xl focus:scale-105 transition    `;
const label = `text-white text-xl mb-2  `;

function Form({ setSelectedSection }: Props) {
  const [isFormSend, setIsFormSend] = useState(false);
  const [roleSelected, setRoleSelected] = useState<number>(0);
  const nomRef = useRef<HTMLInputElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      setIsFormSend(true);
    }, 500);

    console.log(roleSelected);
    console.log(isFormSend);
  };

  return (
    <section className="px-8 py-6 max-w-screen-2xl mx-auto " id="nouscontacter">
      <motion.div
        initial="hidden"
        whileInView="visible"
        // L'animation ne se joue qu'une fois
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        onViewportEnter={() => setSelectedSection(SelectedSection.Contact)}
      >
        <Title title="Nous contacter" />
        <div className="text-center lg:w-4/5 lg:text-start my-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores architecto ea voluptatum dolorum quasi dicta, eius,
            veniam, enim in culpa cupiditate. Saepe dolore nemo praesentium
            sequi nam sit voluptatibus, optio maiores? Unde doloribus quisquam
            optio esse, sapiente perspiciatis nihil laboriosam ratione
            temporibus? Tempore officiis, voluptas excepturi ipsa ea asperiores!
          </p>
        </div>

        <div
          className=" bg-tertiary-100 flex  
      rounded-md shadow-md p-4  "
        >
          <form
            onSubmit={handleSubmit}
            className={`w-full overflow-hidden p-2 ${
              isFormSend && "text-black"
            }  `}
          >
            {/* FORM */}
            <div className="flex flex-col ">
              <div className={`${containerInput}`}>
                <label className={`${label}`} htmlFor="nom">
                  Nom de famille
                </label>
                <input
                  ref={nomRef}
                  disabled={isFormSend}
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder="Mon nom de famille"
                  required
                  className={`${input}`}
                />
              </div>
              <div className={`${containerInput}  `}>
                <label
                  className={`${label} focus-within:scale-125   `}
                  htmlFor="prenom"
                >
                  Prénom
                </label>
                <input
                  disabled={isFormSend}
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder="Mon prénom"
                  required
                  className={`${input}`}
                />
              </div>
              <div className={`${containerInput}  `}>
                <label
                  className={`${label} focus-within:scale-125   `}
                  htmlFor="mail"
                >
                  Adresse mail
                </label>
                <input
                  disabled={isFormSend}
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Mon adresse mail"
                  required
                  className={`${input}`}
                />
              </div>
              <div className={`${containerInput}`}>
                <label className={`${label}`} htmlFor="role">
                  Je suis :
                </label>
                <select
                  onChange={(e) => setRoleSelected(e.target.selectedIndex)}
                  name="role"
                  id="role"
                  className={`${input}`}
                  disabled={isFormSend}
                  required
                >
                  <option value="amateur">Amateur</option>
                  <option value="professionnel">Professionnel</option>
                </select>
              </div>
              <div className={`${containerInput}`}>
                <label className={`${label}`} htmlFor="message">
                  Votre message
                </label>
                <textarea
                  disabled={isFormSend}
                  required
                  className="h-full p-4 rounded-xl focus:scale-105 transition "
                  placeholder="C'est ici que vous pouvez écrire votre message et faire part de votre demande ! "
                  name="message"
                  id="message"
                  maxLength={400}
                  style={{ resize: "none" }}
                  cols={30}
                  rows={6}
                ></textarea>
              </div>

              {/* BUTTON */}
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={`text-center mt-4 w-1/2 mx-auto border-2 border-primary-100 p-2  rounded-lg hover:shadow-xl transition ${
                  !isFormSend && "hover:bg-primary-300"
                }
                relative overflow-hidden ${isFormSend && "opacity-50"} `}
              >
                <button
                  disabled={isFormSend}
                  className="text-white font-bold text-xl "
                  type="submit"
                >
                  Envoyer
                </button>
              </motion.div>
            </div>
            {/* IMAGE ILLUSTRATION */}
          </form>
          {/* IMAGE */}
          <div
            className={` hidden lg:flex overflow-hidden rounded-lg p-2 ${
              isFormSend && "grayscale"
            } `}
          >
            <img
              className=" object-cover "
              src={Illustration5}
              alt="Illustration"
            />
          </div>
        </div>
        {isFormSend && (
          <div
            ref={divRef}
            id="valideMessage"
            className="my-12 w-full  text-2xl md:text-center lg:text-start border-t-4 border-t-tertiary-300 border-l-8 border-l-tertiary-100 shadow-lg p-4 "
          >
            <p>
              Nous avons bien reçu votre demande{" "}
              <span className="font-bold">
                {" "}
                monsieur/madame {nomRef?.current?.value}.
              </span>
              Vous êtes inscrit(e) en tant que dessinateur/dessinatrice{" "}
              <span className="font-bold">
                {" "}
                {roleSelected !== 0 ? " professionnel.le" : "amateur(e)"}
              </span>
            </p>
            <p className="">
              Nous allons vous contacter très prochainement, restez à l'affus de
              vos mails !
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Form;
