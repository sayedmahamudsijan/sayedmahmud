# Paste the entire script here

import streamlit as st
import matplotlib.pyplot as plt
import plotly.express as px
import pandas as pd
import time

# Set the title of the Streamlit App
st.set_page_config(
    page_title="Sayed Mahmud's Portfolio",
    layout="wide"
)

# Header Section
st.title("👋 Welcome to Sayed Mahmud's Portfolio")
st.write(
    """
    Hi! I'm **Sayed Mahmud**, a QA Engineer with expertise in Software Testing, Metamaterials, Machine Learning (ANN), and Software Development.
    - 📧 [Email me](mailto:sayedmahamudsijann@gmail.com) 
    - 📍 Located in Dhaka, Bangladesh.
    """
)

# Separator for Sections
st.markdown("---")

# Section 1: Experience
st.header("💼 Experience")
with st.spinner('Loading experience details...'):
    time.sleep(1)  # Simulate Loading
    st.subheader("QA Engineer Intern at A1QA Software Testing Company")
    st.write(
        """
        - **Jan 2024 – June 2024** | Remote  
        - Tested software functionalities with **JIRA & Postman**.
        - Conducted regression, smoke testing, and bug tracking.
        """
    )
    st.subheader("Teaching Assistant at International Islamic University Chittagong")
    st.write(
        """
        - **Nov 2022 – Nov 2023** | Chittagong, Bangladesh  
        - Mentored students in **VLSI System Design**, **Analog Circuit**, and **Electronic System Design**.
        """
    )
st.success("Experience section loaded successfully!")

# Separator for Sections
st.markdown("---")

# Section 2: Projects
st.header("🛠️ Projects")
project_option = st.selectbox(
    "Choose a project you'd like to explore",
    ["Sustainable Living Tech", "Daylight Dependent Smart Streetlight"]
)

if project_option == "Sustainable Living Tech":
    st.write("### Sustainable Living Tech")
    st.write(
        """
        A self-designed project aimed at supporting innovative solutions for a greener planet. 
        It combines solar energy concepts and IoT.
        """
    )
elif project_option == "Daylight Dependent Smart Streetlight":
    st.write("### Daylight Dependent Smart Streetlight")
    st.write(
        """
        Developed using IoT concepts to ensure energy-efficient use of lighting by adjusting based on sunlight availability.
        """
    )

# Separator
st.markdown("---")

# Visualization Section with Animations
st.header("📊 Skills Visualization")
# Create some sample visualizations
data = pd.DataFrame({
    "Skills": ["MATLAB", "Python", "JIRA", "Postman", "CST Studio", "Machine Learning"],
    "Proficiency": [90, 85, 80, 75, 70, 95]
})

fig = px.bar(data, x="Skills", y="Proficiency", text="Proficiency", barmode="group")
st.plotly_chart(fig)

# Separator
st.markdown("---")

# Section for Fun Widgets
st.header("🎮 Fun Interactive Section")
st.write(
    """
    Let's explore some interactive widgets. Choose below:
    """
)

selected_number = st.slider("Select a number between 0 and 100", min_value=0, max_value=100, value=50)

st.write(f"Your selected number is **{selected_number}** 🎉!")

# Animate data visualization
st.write("Let's animate some data...")
for i in range(1, 11):
    st.write(f"Processing step {i}/10...")
    time.sleep(0.3)  # Simulate progress animation

st.success("Animation simulation complete!")

# Separator
st.markdown("---")

# Footer
st.info("Made with ❤️ by Sayed Mahmud.")

!streamlit run portfolio.py --no-browser --server.port=8501
