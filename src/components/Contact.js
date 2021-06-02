import { useRef, useState } from "react";

const Contact = () => {
  const [contactList, setContactList] = useState([]);

  const name = useRef();
  const tel = useRef();
  const email = useRef();
  const tb = useRef();

  const add = () => {
    setContactList([
      {
        fname: name.current.value,
        phone: tel.current.value,
        mail: email.current.value,
      },
      ...contactList,
    ]);
    name.current.value = "";
    tel.current.value = "";
    email.current.value = "";
  };

  const remove = (index) => {
    const newContactList = contactList.filter((contact, idx) => {
      return idx !== index;
    });

    setContactList(newContactList);
  };

  const edit = (index) => {
    setContactList(
      contactList.map((contact, idx) => {
        if (idx === index) {
          contact.isEdit = true;
        }

        return contact;
      })
    );
  };

  const cancel = (index) => {
    setContactList(
      contactList.map((contact, idx) => {
        if (idx === index) {
          delete contact.isEdit;
        }

        return contact;
      })
    );
  };

  const save = (index) => {
    setContactList(
      contactList.map((contact, idx) => {
        if (idx === index) {
          const tr = tb.current.children[index];
          const nameEdit = tr.querySelector(".name");
          const phoneEdit = tr.querySelector(".tel");
          const emailEdit = tr.querySelector(".email");
          contact.fname = nameEdit.value;
          contact.phone = phoneEdit.value;
          contact.mail = emailEdit.value;
          delete contact.isEdit;
        }
        return contact;
      })
    );
  };

  return (
    <>
      <div>
        <input type="text" placeholder="이름" ref={name} />
        <input type="text" placeholder="연락처" ref={tel} />
        <input type="text" placeholder="이메일" ref={email} />
        <button onClick={add}>입력</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>이름</th>
            <th>연락처</th>
            <th>이메일</th>
            <th></th>
          </tr>
        </thead>
        <tbody ref={tb}>
          {contactList.map((contact, index) => (
            <tr key={index}>
              <td>
                <button
                  onClick={() => {
                    remove(index);
                  }}
                >
                  삭제
                </button>
              </td>
              <td>
                {!contact.isEdit && <span>{contact.fname}</span>}
                {contact.isEdit && (
                  <input
                    type="text"
                    defaultValue={contact.fname}
                    className="name"
                  ></input>
                )}
              </td>

              <td>
                {!contact.isEdit && <span>{contact.phone}</span>}
                {contact.isEdit && (
                  <input
                    type="text"
                    defaultValue={contact.phone}
                    className="tel"
                  ></input>
                )}
              </td>

              <td>
                {!contact.isEdit && <span>{contact.mail}</span>}
                {contact.isEdit && (
                  <input
                    type="text"
                    defaultValue={contact.mail}
                    className="email"
                  ></input>
                )}
              </td>
              <td>
                {!contact.isEdit && (
                  <button
                    onClick={() => {
                      edit(index);
                    }}
                  >
                    edit
                  </button>
                )}
                {contact.isEdit && (
                  <button
                    onClick={() => {
                      save(index);
                    }}
                  >
                    save
                  </button>
                )}
                {contact.isEdit && (
                  <button
                    onClick={() => {
                      cancel(index);
                    }}
                  >
                    cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contact;
