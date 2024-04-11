export default function Contact() {
  return (
    <div>
      <form name="contact" method="post">
        <input type="text" id="name" name="name" placeholder="name" />
        <input type="email" id="email" name="email" placeholder="email" />
        <div>
          <textarea name="message" />{" "}
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
