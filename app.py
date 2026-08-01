print(">>> CORRECT APP.PY IS RUNNING <<<")

from flask import Flask, render_template
import webbrowser
from threading import Timer

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

@app.route("/skills")
def skills():
    return render_template("skills.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/certificates")
def certificates():
    return render_template("certificates.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")


def open_browser():
    webbrowser.open("http://127.0.0.1:5000", new=0)


if __name__ == "__main__":
    Timer(1, open_browser).start()
    app.run(debug=True, use_reloader=False)