$(document).ready(function () {
    getCountries();

    $("#target").change(function () {
        setButtonText();
        generateUniversitiesList(getSelectedValue());

    });

    function getSelectedValue() {
        return $('#target').find(":selected").val();
    }

    function setButtonText() {
        $("#collapseButton").html("Universities in " + $('#target').find(":selected").text());
    }

    function generateUniversitiesList(country) {
        var urlLink = "http://universities.hipolabs.com/search?country=" + country;
        $.get(urlLink, function (data, status) {
            if (status == "success" && data != null && data != undefined) {
                $("#universityList").html('');
                for (let index = 0; index < data.length; index++) {
                    $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

                }
            } else {
                $("#universityList").append("Can't load the list from url.");
            }
        });
    }

    function getCountries() {
        var urlLink = "http://universities.hipolabs.com/search";
        $.get(urlLink, (data, status) => {
            if (status == "success" && data != null && data != undefined) {
                $("#target").html('');
                var countryName = [];
                for (let index = 0; index < data.length; index++) {
                    if (countryName.indexOf(data[index].country) == -1) {
                        countryName.push(data[index].country);
                        if (countryName.Lenth == 0) {
                            $("#target").append(`<option value="${data[index].country}" selected="selected">${data[index].country}</option>`);
                        } else {
                            $("#target").append(`<option value="${data[index].country}">${data[index].country}</option>`);
                        }
                    }
                }
                setButtonText();
                generateUniversitiesList(getSelectedValue());
            }
        });
    }
});